import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="luffy.jpg" alt="Luffy" className="front-image" />
          </div>
          <div className="flip-card-back">
            <p className="title text-foreground">"Power isn't determined by your size, but the size of your heart and dreams!"
            </p>
            <p className="title text-foreground">— Luffy</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-width: 420px;
    margin-inline: auto;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    will-change: transform;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    border: 1px solid coral;
    border-radius: 1rem;
    overflow: hidden;
  }

  .flip-card-front {
    position: relative;
    transform: rotateY(0deg);
    background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
    );
    color: coral;
  }

  .front-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .dark & .front-image {
    filter: brightness(0.9);
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }

  .dark & .flip-card-back {
    color: black;
  }

  .dark & .flip-card-back p {
    color: black !important;
  }
`;

export default Card;
