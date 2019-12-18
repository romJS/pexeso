import React from "react";
import styled from "styled-components";

const StyledGameBar = styled.div`
  background: #bdcebe;
  width: 800px;
  margin: auto;
  border: 2px solid rgba(173, 163, 151, 0.32);
  border-radius: 5px;
  position: relative;
`;

const GameBar = props => {
  return <StyledGameBar id="show-moves">{props.children}</StyledGameBar>;
};

export default GameBar;
