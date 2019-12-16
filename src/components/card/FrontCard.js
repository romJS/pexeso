import React from "react";
import styled from "styled-components";
import { BoardContext } from "../Board";

const StyledFrontCard = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotateY(-180deg);
  width: 100%;
  height: 100%;
  ////////////////////////////////////
  -webkit-backface-visibility: hidden;
  transition: all 0.6s ease 0s;
  position: absolute;
  top: 0;
  left: 0;
  border: #000000 1px solid;
  display: table;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &.active {
    transform: rotateY(0deg);
  }
`;

const FrontCard = props => {
  return (
    <BoardContext.Consumer>
      {({ image, open }) => (
        <StyledFrontCard
          className={`front-card ${open ? "active" : ""}`}
          style={{
            backgroundImage: `url(../img/simpsons/${image.cardName}.gif)`
          }}
        ></StyledFrontCard>
      )}
    </BoardContext.Consumer>
  );
};

export default FrontCard;
