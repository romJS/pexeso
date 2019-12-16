import React from "react";
import styled from "styled-components";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

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
    console.log("renderuji kartu");
    return (
      <StyledCard className="card" onClick={this.props.onClick}>
        <BackCard />
        <FrontCard />
      </StyledCard>
    );
  }
}

export default Card;
