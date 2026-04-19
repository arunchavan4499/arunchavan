import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const CubeLoader = ({ size = 100 }) => {
    const [rotation, setRotation] = useState({ x: -30, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current || !isHovering) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = (e.clientY - centerY) / 10;
            const y = (e.clientX - centerX) / 10;

            setRotation({ x: -30 + x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    return (
        <StyledWrapper
            size={size}
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setRotation({ x: -30, y: 0 });
            }}
            rotation={rotation}
        >
            <div className="cube">
                <div className="cube__face" id="cube__face--front">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
                <div className="cube__face" id="cube__face--back">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
                <div className="cube__face" id="cube__face--right">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
                <div className="cube__face" id="cube__face--left">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
                <div className="cube__face" id="cube__face--top">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
                <div className="cube__face" id="cube__face--bottom">
                    {Array.from({ length: 9 }).map((_, i) => <span key={i} className="faceBox" />)}
                </div>
            </div>
        </StyledWrapper>
    );
};

const animate = keyframes`
  0% {
    transform: rotateX(-30deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-30deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const StyledWrapper = styled.div`
  ${({ size, rotation }) => {
        const s = size;
        return css`
      .cube {
        width: ${s}px;
        height: ${s}px;
        transform-style: preserve-3d;
        animation: ${animate} 4s linear infinite;
        cursor: pointer;
        transition: all 0.1s ease-out;
        transform: rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(0deg);
      }

      .cube:hover {
        scale: 1.2;
        animation: ${animate} 3s linear infinite;
      }

      .cube__face {
        position: absolute;
        width: ${s}px;
        height: ${s}px;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .faceBox {
        border: calc(${s}px / 1000) solid rgba(0, 0, 0, 0.8);
        width: calc(${s}px / 3);
        height: calc(${s}px / 3);
        opacity: 1;
        border-radius: 8px;
        transition: background-color 0.3s ease;
      }

      #cube__face--front span  { background-color: #FF4949; }
      #cube__face--right span  { background-color: #13CE66; }
      #cube__face--left span   { background-color: #2D8EFF; }
      #cube__face--top span    { background-color: #FFCC3D; }
      #cube__face--bottom span { background-color: #fefefe; }
      #cube__face--back span   { background-color: #f1f03e; }

      #cube__face--front  { transform: rotateY(0deg)    translateZ(calc(${s}px / 2)); }
      #cube__face--right  { transform: rotateY(90deg)   translateZ(calc(${s}px / 2)); }
      #cube__face--back   { transform: rotateY(180deg)  translateZ(calc(${s}px / 2)); }
      #cube__face--left   { transform: rotateY(-90deg)  translateZ(calc(${s}px / 2)); }
      #cube__face--top    { transform: rotateX(90deg)   translateZ(calc(${s}px / 2)); }
      #cube__face--bottom { transform: rotateX(-90deg)  translateZ(calc(${s}px / 2)); }
    `;
    }}
`;

export default CubeLoader;
