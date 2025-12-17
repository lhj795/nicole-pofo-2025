import React from "react";
import { Link as MuiLink } from "@mui/material";

export default function CursorLink({
    href,
    label = "LinkedIn",  // what appears inside the cursor
    children,
    underline = "hover",
    sx,
    ...props
}) {
    const handleEnter = () => {
        window.dispatchEvent(
            new CustomEvent("cursor-mode", {
                detail: { mode: "caseStudy", label },
            })
        );
    };

    const handleLeave = () => {
        window.dispatchEvent(
            new CustomEvent("cursor-mode", { detail: "default" })
        );
    };

    return (
        <MuiLink
            href={href}
            target="_blank"
            rel="noreferrer"
            underline={underline}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
            sx={{
                color: "#0060C0",
                textDecorationThickness: 1,
                textUnderlineOffset: "0.15em",

                // --- Invisible hit target expansion ---
                display: "inline-block",
                position: "relative",
                padding: "0.5rem 0.5rem",      // bigger hit-area
                margin: "-0.5rem -0.5rem",     // negates padding so layout doesn't shift
                ...sx,
            }}
            {...props}
        >
            {children}
        </MuiLink>
    );

}
