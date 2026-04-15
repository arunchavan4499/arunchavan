import styled from "styled-components";

type LetsTalkInnerLoaderProps = {
    className?: string;
};

const LetsTalkInnerLoader = ({ className }: LetsTalkInnerLoaderProps) => {
    return (
        <StyledWrapper className={className}>
            <div className="sharingon">
                <div className="ring">
                    <div className="to" />
                    <div className="to" />
                    <div className="to" />
                    <div className="circle" />
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;

  .sharingon {
    width: 46px;
    height: 46px;
    background-color: red;
    border: 4px solid black;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;
    animation: rot 1s ease-in-out infinite;
  }

  .ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 33px;
    height: 33px;
    border: 3px solid rgb(110 13 13 / 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .to,
  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: black;
  }

  .to {
    width: 8px;
    height: 8px;
  }

  .to:nth-child(1) {
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
  }

  .to::before {
    content: "";
    position: absolute;
    top: -4px;
    right: -2px;
    width: 10px;
    height: 8px;
    box-sizing: border-box;
    border-left: 10px solid black;
    border-radius: 100% 0 0;
  }

  .to:nth-child(2) {
    bottom: 4px;
    left: -3px;
    transform: rotate(-120deg);
  }

  .to:nth-child(3) {
    bottom: 4px;
    right: -3px;
    transform: rotate(120deg);
  }

  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9px;
    height: 9px;
    box-shadow: 0 0 6px 1px black;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LetsTalkInnerLoader;
