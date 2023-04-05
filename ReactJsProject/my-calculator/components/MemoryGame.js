import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const newCards = [      { id: 1, image: 'card1.png' },      { id: 2, image: 'card2.png' },      { id: 3, image: 'card3.png' },      { id: 4, image: 'card4.png' },      { id: 5, image: 'card5.png' },      { id: 6, image: 'card6.png' },      { id: 7, image: 'card7.png' },      { id: 8, image: 'card8.png' },    ];

    const shuffledCards = newCards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (cardsFlipped.length === 2) {
      const card1 = cardsFlipped[0];
      const card2 = cardsFlipped[1];
      if (card1.id === card2.id) {
        setCardsMatched([...cardsMatched, card1, card2]);
        setCardsFlipped([]);
      } else {
        setTimeout(() => {
          setCardsFlipped([]);
        }, 1000);
      }
    }
  }, [cardsFlipped, cardsMatched]);

  useEffect(() => {
    if (cardsMatched.length === cards.length) {
      setGameOver(true);
    }
  }, [cardsMatched, cards]);

  const handleCardClick = (card) => {
    if (!cardsFlipped.includes(card) && !cardsMatched.includes(card)) {
      setCardsFlipped([...cardsFlipped, card]);
    }
  };

  return (
    <div>
      <h1>Memory Game</h1>
      {gameOver ? (
        <h2>Congratulations! You matched all the cards!</h2>
      ) : (
        <div className="card-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${
                cardsFlipped.includes(card) ? 'flipped' : ''
              } ${cardsMatched.includes(card) ? 'matched' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-front"></div>
              <div
                className="card-back"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
