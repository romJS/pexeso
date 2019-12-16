import React from "react";
import styled from "styled-components";
import PlayAgainButton from "./PlayAgainButton";

const StyledPopUp = styled.div`
  width: 300px;
  height: 130px;
  background-color: #bdcebe;
  margin: auto;
  align-self: center;
  position: absolute;
  top: 400px;
  font-weight: bold;
  border: 5px solid rgba(173, 163, 151, 0.32);
  border-radius: 5px;
`;

const PopUpWindow = props => {
  return (
    <StyledPopUp>
      <p>Your score: {props.score}</p>
      <p>Number of moves: {props.moves}</p>
      <PlayAgainButton resetGame={props.resetGame} />
    </StyledPopUp>
  );
};

export default PopUpWindow;
