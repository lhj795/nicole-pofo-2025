// src/components/BlobHeroCanvas.jsx
import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

class Blob {
  constructor(canvas) {
    this.points = [];
    this._canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this._color = "#000000";
    this._points = 32;
    this._radius = 150;
    this._position = { x: 0.5, y: 0.5 };
    this._running = true;
  }

  init() {
    this.points = [];
    for (let i = 0; i < this.numPoints; i++) {
      const point = new Point(this.divisional * (i + 1), this);
      this.push(point);
    }
  }

  push(item) {
    if (item instanceof Point) this.points.push(item);
  }

  render() {
    if (!this._running) return;

    const canvas = this._canvas;
    const ctx = this.ctx;
    const pointsArray = this.points;
    const points = this.numPoints;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

    let p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(
        pointsArray[i - 1],
        pointsArray[i + 1] || pointsArray[0]
      );

      const p2 = pointsArray[i].position;
      const xc = (p1.x + p2.x) / 2;
      const yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    const xc = (p1.x + _p2.x) / 2;
    const yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.fillStyle = this.color;
    ctx.fill();

    this._rafId = requestAnimationFrame(this.render.bind(this));
  }

  destroy() {
    this._running = false;
    if (this._rafId) cancelAnimationFrame(this._rafId);
  }

  set color(value) {
    this._color = value || "#000000";
  }
  get color() {
    return this._color;
  }

  set numPoints(value) {
    if (value > 2) this._points = value;
  }
  get numPoints() {
    return this._points || 32;
  }

  set radius(value) {
    if (value > 0) this._radius = value;
  }
  get radius() {
    return this._radius || 150;
  }

  set position(value) {
    if (value && typeof value.x === "number" && typeof value.y === "number") {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return {
      x: this._canvas.width * this.position.x,
      y: this._canvas.height * this.position.y,
    };
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth),
    };
    this._acceleration = -0.3 + Math.random() * 0.6;
    this._speed = 0;
    this._radialEffect = 0;
    this._elasticity = 0.001;
    this._friction = 0.0085;
  }

  solveWith(leftPoint, rightPoint) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction;
  }

  set acceleration(value) {
    if (typeof value === "number") {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  set speed(value) {
    if (typeof value === "number") {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  set radialEffect(value) {
    if (typeof value === "number") {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  get position() {
    const center = this.parent.center;
    return {
      x: center.x + this.components.x * (this.parent.radius + this.radialEffect),
      y: center.y + this.components.y * (this.parent.radius + this.radialEffect),
    };
  }

  get components() {
    return this._components;
  }

  set elasticity(value) {
    if (typeof value === "number") this._elasticity = value;
  }
  get elasticity() {
    return this._elasticity || 0.0005; // a bit softer
  }

  set friction(value) {
    if (typeof value === "number") this._friction = value;
  }
  get friction() {
    return this._friction || 0.01;
  }
}

export default function BlobHeroCanvas({ active, color: overrideColor } = {}) {
  const canvasRef = useRef(null);
  const blobRef = useRef(null);

  const theme = useTheme();

  // Theme token (if present) with a safe fallback
  const themeColor = theme?.palette?.homeBlob?.main ?? "#000000";

  // Allow callers (Home.jsx) to override, otherwise use theme token
  const blobColor = overrideColor ?? themeColor;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const blob = new Blob(canvas);
    blob.color = blobColor;
    blob.radius = 150;
    blob.numPoints = 32;
    blob.position = { x: 0.5, y: 0.5 };
    blob.init();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let oldMousePoint = { x: 0, y: 0 };
    let hover = false;

    const handlePointerMove = (e) => {
      if (!active) return; // do not wobble when not active

      const pos = blob.center;
      const diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
      let angle = null;

      if (dist < blob.radius && hover === false) {
        const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = true;
      } else if (dist > blob.radius && hover === true) {
        const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = false;

        // Return to the themed color instead of hard black
        blob.color = blobColor;
      }

      if (typeof angle === "number") {
        let nearestPoint = null;
        let distance = 1e10;

        blob.points.forEach((point) => {
          const pointAngle = Math.atan2(
            point.position.y - pos.y,
            point.position.x - pos.x
          );
          const diff = Math.abs(angle - pointAngle);
          const dist = Math.min(diff, Math.PI * 2 - diff);

          if (dist < distance) {
            distance = dist;
            nearestPoint = point;
          }
        });

        if (nearestPoint) {
          let strength = {
            x: oldMousePoint.x - e.clientX,
            y: oldMousePoint.y - e.clientY,
          };
          strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y);
          strength = Math.min(strength * 10, 100);
          nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
        }
      }

      oldMousePoint.x = e.clientX;
      oldMousePoint.y = e.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);

    blobRef.current = blob;
    blob.render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      blob.destroy();
    };
  }, [active, blobColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        pointerEvents: active ? "auto" : "none",
        touchAction: "none",
      }}
    />
  );
}
