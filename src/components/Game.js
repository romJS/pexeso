import React from "react";
import styled from "styled-components";
import { createCards, NUMBER_OF_CARDS } from "./helpers";

import Board from "./Board";
import GameBar from "./GameBar";
import Title from "./Title";
import PopUpWindow from "./popUpWindow/PopUpWindow";

const StyledGame = styled.div`
  background: #ada397;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

export const GameContext = React.createContext({
  cards: createCards(),
  card1: undefined,
  card2: undefined,
  discardedCards: [],
  moves: 0,
  score: 0,
  handleClick: () => {}
});

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: createCards(),
      card1: undefined,
      card2: undefined,
      loading: false,
      discardedCards: [],
      moves: 0,
      score: 0,
      gameOver: false,
      handleClick: this.handleClick
    };
  }

  handleClick = id => {
    if (this.state.loading) return;
    if (this.state.card1 === undefined) {
      this.setState({ card1: id });
    } else {
      if (this.state.card1 === id) {
        return;
      }
      this.setState({ card2: id });
    }
    if (this.state.card1 !== undefined) return this.evaluate();
  };

  evaluate() {
    setTimeout(() => {
      this.checkMove();
      this.resetMove();
    }, 1500);
    this.setState({ loading: true });
  }

  checkMove = () => {
    const card1 = this.state.cards.find(card => card.id === this.state.card1);
    const card2 = this.state.cards.find(card => card.id === this.state.card2);

    /// Matching cards
    if (card1.cardName === card2.cardName) {
      this.setState(state => ({
        discardedCards: [...state.discardedCards, card1.id, card2.id],
        score: state.score + 10
      }));
    }

    this.setState(state => ({ loading: false, moves: state.moves + 1 }));

    /// Game over
    if (this.state.discardedCards.length === NUMBER_OF_CARDS) {
      this.setState({ gameOver: true });
    }
  };

  resetMove = () => {
    this.setState({ card1: undefined, card2: undefined });
  };

  resetGame = () => {
    this.setState({ discardedCards: [], moves: 0, score: 0, gameOver: false });
  };

  render() {
    const popUp = this.state.gameOver ? (
      <PopUpWindow
        moves={this.state.moves}
        score={this.state.score}
        resetGame={this.resetGame}
      />
    ) : null;
    return (
      <GameContext.Provider value={this.state}>
        <StyledGame id="game">
          <Title />
          <Board />
          {popUp}
          <GameBar>
            <p>MOVES: {this.state.moves}</p>
            <p>SCORE: {this.state.score}</p>
          </GameBar>
        </StyledGame>
      </GameContext.Provider>
    );
  }
}

export default Game;
