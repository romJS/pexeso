import React from "react";
import styled from "styled-components";
import { BoardContext } from "../Board";

const StyledBackCard = styled.div`
  cursor: pointer;
  visibility: ${props => (props.isDiscard ? "hidden" : "visible")}
  background-image: url(../img/p.jpg);
  background-color: #000000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotateY(0deg);
  height: 100%;
  -webkit-backface-visibility: hidden;
  transition: all 0.6s ease 0s;
  width: 100%;
  border: #000000 1px solid;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &.active {
      transform: rotateY(180deg);
    }
`;

const BackCard = props => {
  return (
    <BoardContext.Consumer>
      {({ open, isDiscard }) => (
        <StyledBackCard
          className={`card-back ${open ? "active" : ""}`}
          isDiscard={isDiscard}
        ></StyledBackCard>
      )}
    </BoardContext.Consumer>
  );
};

export default BackCard;
