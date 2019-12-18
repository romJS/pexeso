import React from "react";
import styled from "styled-components";
import { BoardContext } from "../Board";
import { FrontBackStyles } from "./Card";

const StyledBackCard = styled.div`
  cursor: pointer;
  background-image: url(../img/p.jpg);
  background-color: #000000;
  visibility: ${props => (props.isDiscard ? "hidden" : "visible")}
  transform: ${props => (props.open ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const BackCard = props => {
  return (
    <BoardContext.Consumer>
      {({ open, isDiscard }) => (
        <FrontBackStyles>
          <StyledBackCard open={open} isDiscard={isDiscard}></StyledBackCard>
        </FrontBackStyles>
      )}
    </BoardContext.Consumer>
  );
};

export default BackCard;
