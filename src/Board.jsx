import { useEffect } from "react";
import "./Board.css";
import CardDiv from "./CardDiv";

export default function Board({ numberOfCards, cards, setCards, onCardClick }) {
  useEffect(() => {
    async function fetchCards() {
      const cacheKey = `pokemon_cards_${numberOfCards}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setCards(parsed);
          return;
        } catch (e) {
          // If cache is corrupted, ignore and fetch again
        }
      }
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${numberOfCards}`
        );
        const data = await response.json();
        const fetchedCards = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
          isClicked: false,
        }));
        setCards(fetchedCards);
        localStorage.setItem(cacheKey, JSON.stringify(fetchedCards));
      } catch (error) {
        console.error("Error fetching Pokemon cards:", error);
      }
    }

    fetchCards();
  }, [numberOfCards, setCards]);

  return (
    <div className="board">
      {cards.map((card) => (
        <CardDiv key={card.id} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
