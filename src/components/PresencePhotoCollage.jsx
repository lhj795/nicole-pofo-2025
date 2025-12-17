import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import PotterySculpture from "../assets/presence/Pottery1.png";
import PotteryBowl from "../assets/presence/Pottery2.png";
import PotteryMug from "../assets/presence/Pottery3.png";
import PotteryJar from "../assets/presence/Pottery4.png";
import BrownUni from "../assets/presence/BrownUni.png";
import SanDiego from "../assets/presence/SanDiego.png";
import EunHengLeaf from "../assets/presence/EunHengLeaf.png";
import WindowImg from "../assets/presence/Window.png";
import NatureLab from "../assets/presence/NatureLab.png";
import Hamburger from "../assets/presence/Hamburger.png";
import Painting from "../assets/presence/Painting.png";

// These numbers are exactly from your Figma frame
const RAW_PHOTOS = [
    {
        id: "painting",
        src: Painting,
        width: 229,
        height: 273,
        x: 237,
        y: 149,
        rotate: 13,
    },
    {
        id: "hamburger",
        src: Hamburger,
        width: 359,
        height: 238,
        x: 0,
        y: 0,
        rotate: -12,
    },
    {
        id: "nature-lab",
        src: NatureLab,
        width: 295,
        height: 411.73,
        x: 425,
        y: 0,
        rotate: -10,
    },
    {
        id: "window",
        src: WindowImg,
        width: 198,
        height: 264,
        x: 641,
        y: 297.68,
        rotate: 15,
    },
    {
        id: "eun-heng-leaf",
        src: EunHengLeaf,
        width: 126.74,
        height: 159,
        x: 710,
        y: 184,
        rotate: 30,
    },
    {
        id: "san-diego",
        src: SanDiego,
        width: 301,
        height: 401,
        x: 166,
        y: 376,
        rotate: 8,
    },
    {
        id: "brown-uni",
        src: BrownUni,
        width: 200,
        height: 276,
        x: 0,
        y: 560.35,
        rotate: -15,
    },
    {
        id: "pottery-jar",
        src: PotteryJar,
        width: 254,
        height: 259,
        x: 17,
        y: 258,
        rotate: 0,
    },
    {
        id: "pottery-mug",
        src: PotteryMug,
        width: 295,
        height: 227,
        x: 345,
        y: 378,
        rotate: 0,
    },
    {
        id: "pottery-bowl",
        src: PotteryBowl,
        width: 166,
        height: 139,
        x: 687,
        y: 28,
        rotate: 0,
    },
    {
        id: "pottery-sculpture",
        src: PotterySculpture,
        width: 295,
        height: 335.65,
        x: 535,
        y: 535,
        rotate: 0,
    },
];

export default function PresencePhotoCollage() {
    const containerRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });
    const [entered, setEntered] = useState(false);

    // These match your actual collage design region (≈ 900x879 in Figma)
    const ORIGINAL_W = 900;
    const ORIGINAL_H = 879;

    // GLOBAL MOVEMENT VALUES (all images share this)
    let globalX = 0;
    let globalY = 0;
    let globalRotate = 0;

    if (mouse.active && containerRef.current) {
        const cw = containerRef.current.offsetWidth;
        const ch = containerRef.current.offsetHeight;

        const nx = (mouse.x / cw) * 2 - 1; // -1 to 1 range
        const ny = (mouse.y / ch) * 2 - 1;

        const drift = 26; // px max drift for collage
        globalX = nx * drift;
        globalY = ny * drift;

        const maxTilt = 3; // degrees
        globalRotate = nx * maxTilt;
    }

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
        });
    };

    const handleMouseLeave = () => {
        setMouse((prev) => ({ ...prev, active: false }));
    };

    useEffect(() => {
        const timer = setTimeout(() => setEntered(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: "relative",
                width: "100%",
                pb: "98%", // this gives ~900x879 depending on container width
            }}
        >
            {RAW_PHOTOS.map((photo, index) => {
                // entrance
                const entranceBoost = 5; // amplify how far images fly in
                const entranceScale = entered ? 1 : 0.5; // start slightly smaller
                const entranceRotate = entered ? 0 : (photo.initialOffsetX * 0.04);

                // 1. REAL container size
                const cw = containerRef.current?.offsetWidth || ORIGINAL_W;
                const ch = containerRef.current?.offsetHeight || ORIGINAL_H;

                // 2. SCALE based on actual rendered region
                const scaleX = cw / ORIGINAL_W;
                const scaleY = ch / ORIGINAL_H;

                // 3. PHOTO POSITION & SIZE
                const left = photo.x * scaleX;
                const top = photo.y * scaleY;
                const widthPx = photo.width * scaleX;
                const heightPx = photo.height * scaleY;

                // 4. PER-IMAGE MICRO DEPTH OFFSET
                const depthFactor = photo.depth ?? index * 0.12;
                const microX = depthFactor * 6;
                const microY = depthFactor * 4;
                const microR = depthFactor * 1.2;

                // ---------------------------------------------
                // PROXIMITY ENHANCEMENT
                // ---------------------------------------------
                let nearX = 0;
                let nearY = 0;
                let nearRotate = 0;
                let nearScale = 1;

                if (mouse.active) {
                    // distance from cursor to *this photo's center*
                    const centerX = left + widthPx / 2;
                    const centerY = top + heightPx / 2;

                    const dx = mouse.x - centerX;
                    const dy = mouse.y - centerY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // how far influence should reach (in px)
                    const radius = cw * 0.55; // 55% of collage width

                    // 0 → 1 falloff
                    const proximityStrength = Math.max(0, 1 - dist / radius);
                    const maxScaleBoost = 0.12; // up to +12% scale
                    nearScale = 1 + maxScaleBoost * proximityStrength;

                    // intensity multipliers (tune these)
                    const nearTilt = 30;   // degrees

                    // extra movement based on proximity
                    nearX = -dx * proximityStrength * 1.25; // push AWAY from cursor
                    nearY = -dy * proximityStrength * 1.25;

                    // extra rotation based on horizontal vector
                    nearRotate = (-dx / radius) * nearTilt * proximityStrength;

                    // proximity-based scaling ***
                    nearScale = 1.1 + maxScaleBoost * proximityStrength;
                }

                // 5. ENTRANCE ANIMATION
                const startX = photo.initialOffsetX * entranceBoost;
                const startY = photo.initialOffsetY * entranceBoost;

                // 6. FINAL MOVEMENT COMBINATION
                const translateX =
                    (entered ? 0 : startX) + globalX + microX + nearX;

                const translateY =
                    (entered ? 0 : startY) + globalY + microY + nearY;

                const finalRotate =
                    photo.rotate + globalRotate + microR + nearRotate;

                return (
                    <Box
                        key={photo.id}
                        sx={{
                            position: "absolute",
                            left: `${left}px`,
                            top: `${top}px`,
                            width: `${widthPx}px`,
                            height: `${heightPx}px`,
                            transform: `
  translate(${translateX}px, ${translateY}px)
  rotate(${finalRotate + entranceRotate}deg)
  scale(${nearScale * entranceScale})
`,
                            transformOrigin: "center center",
                            opacity: entered ? 1 : 0,
                            transition:
                                "transform 900ms cubic-bezier(0.19, 1, 0.22, 1), opacity 900ms ease-out",
                            transitionDelay: `${photo.delay}ms`,
                            willChange: "transform",
                        }}
                    >
                        <Box
                            component="img"
                            src={photo.src}
                            alt={photo.id}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.18))",
                            }}
                        />
                    </Box>
                );
            })}
        </Box>
    );
}