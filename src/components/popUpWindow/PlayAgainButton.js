import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #bdcebe;
  padding: 5px 10px;
`;

const PlayAgainButton = props => {
  return <StyledButton onClick={props.resetGame}>PLAY AGAIN</StyledButton>;
};

export default PlayAgainButton;
