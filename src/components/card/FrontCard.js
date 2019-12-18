import React from "react";
import styled from "styled-components";
import { BoardContext } from "../Board";
import { FrontBackStyles } from "./Card";

const StyledFrontCard = styled.div`
  background-image: url(../img/simpsons/${props => props.image}.gif);
  transform: ${props => (props.open ? "rotateY(0deg)" : "rotateY(-180deg)")};
  top: 0;
  left: 0;
`;

const FrontCard = props => {
  return (
    <BoardContext.Consumer>
      {({ image, open }) => (
        <FrontBackStyles>
          <StyledFrontCard open={open} image={image.cardName}></StyledFrontCard>
        </FrontBackStyles>
      )}
    </BoardContext.Consumer>
  );
};

export default FrontCard;
