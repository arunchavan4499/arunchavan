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
}: GlareHoverProps) => {
    const containerStyle: CSSProperties = {
        width,
        height,
        background,
        borderRadius,
        border: `1px solid ${borderColor}`,
        position: "relative",
        overflow: "hidden",
    };

    const glareStyle: CSSProperties = {
        position: "absolute",
        inset: "-40%",
        pointerEvents: "none",
        background: `linear-gradient(${glareAngle}deg, transparent 35%, ${glareColor} 50%, transparent 65%)`,
        opacity: glareOpacity,
        transform: `translateX(-30%) scale(${Math.max(1, glareSize / 200)})`,
        transition: `transform ${transitionDuration}ms ease, opacity ${transitionDuration}ms ease`,
    };

    return (
        <div className={className} style={containerStyle}>
            {children}
            <div style={glareStyle} />
        </div>
    );
};

export default GlareHover;
