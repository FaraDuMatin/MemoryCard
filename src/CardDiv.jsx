import { useRef } from "react";

export default function CardDiv({ card, onCardClick }) {
  const cardRef = useRef(null);

  function handleClick() {
    if (cardRef.current) {
      cardRef.current.classList.add("no-transition");
      // Remove the class after the next frame so shuffle is instant
      requestAnimationFrame(() => {
        cardRef.current.classList.remove("no-transition");
      });
    }
    onCardClick(card.id);
  }

  return (
    <div ref={cardRef} className="card" onClick={handleClick}>
      <img src={card.imageUrl} alt={card.name} className="card-image" />
      <h2 className="card-name">{card.name}</h2>
    </div>
  );
}