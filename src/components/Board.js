import React from "react";
import styled from "styled-components";
import Card from "./card/Card";
import { GameContext } from "./Game";

const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 850px;
  margin: 30px auto;
  position: relative;
`;

export const BoardContext = React.createContext({
  onClick: () => {},
  open: false,
  isDiscard: false
});

const Board = () => {
  return (
    <GameContext.Consumer>
      {({ cards, card1, card2, handleClick, discardedCards }) => (
        <StyledBoard className="board">
          {cards.map(image => {
            // return card´s id for discard
            let discardedId = discardedCards.find(card => card === image.id);
            // ensures that only two cards are rotated
            const open = card1 === image.id || card2 === image.id;
            // matched cards become hidden
            const isDiscard = discardedId === image.id;
            return (
              <BoardContext.Provider
                key={image.id}
                value={{ image, open, isDiscard }}
              >
                <Card open={open} onClick={() => handleClick(image.id)} />
              </BoardContext.Provider>
            );
          })}
        </StyledBoard>
      )}
    </GameContext.Consumer>
  );
};

export default Board;
