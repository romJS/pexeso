import React from "react";
import styled from "styled-components";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

export const FrontBackStyles = styled.div`
  div {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.6s ease 0s;
    border: #000000 1px solid;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
`;

const StyledCard = styled.div`
  transition: all 0.6s ease 0s;
  transform-style: preserve-3d;
  position: relative;
  width: 190px;
  height: 150px;
  margin: 10px;
`;

class Card extends React.PureComponent {
  render() {
    return (
      <StyledCard onClick={this.props.onClick}>
        <BackCard />
        <FrontCard />
      </StyledCard>
    );
  }
}

export default Card;
