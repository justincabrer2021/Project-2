import { useState } from "react";

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flashcard ${card.category} ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      {!flipped ? (
        <>
          <h2>{card.question}</h2>
          {card.image && <img src={card.image} alt="card visual" />}
        </>
      ) : (
        <>
          <h2>{card.answer}</h2>
        </>
      )}
    </div>
  );
};

export default Flashcard;