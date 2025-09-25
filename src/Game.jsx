import { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);
    const numberOfCards = 12;

    // Fisher-Yates shuffle algorithm
    function shuffleCards(cardsToShuffle) {
        const shuffled = [...cardsToShuffle];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function handleCardClick(id) {
        const card = cards.find((c) => c.id === id);
        if (card.isClicked) {
            // Card already clicked, reset game
            setBestScore(Math.max(bestScore, score));
            setScore(0);
            const resetCards = cards.map((c) => ({ ...c, isClicked: false }));
            setCards(shuffleCards(resetCards));
        } else {
            // Mark card as clicked and increment score
            const updatedCards = cards.map((c) =>
                c.id === id ? { ...c, isClicked: true } : c
            );
            setCards(shuffleCards(updatedCards));
            setScore(score + 1);
        }
    }


    function resetGame() {
        setBestScore(Math.max(bestScore, score));
        setScore(0);
        const resetCards = cards.map((c) => ({ ...c, isClicked: false }));
        setCards(shuffleCards(resetCards));
    }
    return (
        <div className="game">
            <h1 className="game-title">Memory Card Game</h1>
            <div className="game-scores">
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
                <button onClick={resetGame}>Reset Game</button>
            </div>
            <Board 
                numberOfCards={numberOfCards} 
                cards={cards}
                setCards={setCards}
                onCardClick={handleCardClick}
            />
        </div>
    );
}

