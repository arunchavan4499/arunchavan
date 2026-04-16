import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type GlareHoverProps = {
    children: ReactNode;
    className?: string;
    width?: string | number;
    height?: string | number;
    background?: string;
    borderRadius?: string | number;
    borderColor?: string;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    style?: CSSProperties;
};

const GlareHover = ({
    children,
    className,
    width = "100%",
    height = "100%",
    background = "transparent",
    borderRadius = 0,
    borderColor = "transparent",
    glareColor = "#ffffff",
    glareOpacity = 0.18,
    glareAngle = -35,
    glareSize = 200,
    transitionDuration = 500,
    playOnce = false,
    style = {},
}: GlareHoverProps) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const hex = glareColor.replace("#", "");
    let rgba = glareColor;

    if (/^[\dA-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    }

    const animateIn = () => {
        const el = overlayRef.current;
        if (!el) return;

        el.style.transition = "none";
        el.style.backgroundPosition = "-100% -100%, 0 0";
        // Force reflow so the transition starts from the reset position.
        void el.offsetWidth;
        el.style.transition = `${transitionDuration}ms ease`;
        el.style.backgroundPosition = "100% 100%, 0 0";
    };

    const animateOut = () => {
        const el = overlayRef.current;
        if (!el) return;

        if (playOnce) {
            el.style.transition = "none";
            el.style.backgroundPosition = "-100% -100%, 0 0";
            return;
        }

        el.style.transition = `${transitionDuration}ms ease`;
        el.style.backgroundPosition = "-100% -100%, 0 0";
    };

    const containerStyle: CSSProperties = {
        width,
        height,
        background,
        borderRadius,
        border: `1px solid ${borderColor}`,
        position: "relative",
        overflow: "hidden",
        ...style,
    };

    const overlayStyle: CSSProperties = {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
        backgroundSize: `${glareSize}% ${glareSize}%`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-100% -100%, 0 0",
        pointerEvents: "none",
    };

    return (
        <div
            className={`relative grid place-items-center overflow-hidden border cursor-pointer ${className ?? ""}`}
            style={containerStyle}
            onMouseEnter={animateIn}
            onMouseLeave={animateOut}
        >
            {children}
            <div ref={overlayRef} style={overlayStyle} />
        </div>
    );
};

export default GlareHover;
