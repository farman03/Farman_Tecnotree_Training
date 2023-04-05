import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { Container, Row, Col } from "react-bootstrap";

const values = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [solvedCards, setSolvedCards] = useState([]);

  useEffect(() => {
    const shuffledValues = shuffle(values);
    const initialCards = shuffledValues.map((value) => ({
      value,
      flipped: false,
    }));
    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.value === secondCard.value) {
        setSolvedCards([...solvedCards, firstCard.value]);
        setCards(
          cards.map((card) =>
            card.value === firstCard.value || card.value === secondCard.value
              ? { ...card, flipped: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards(
            cards.map((card) =>
              card.value === firstCard.value || card.value === secondCard.value
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  const handleClick = (index) => {
    const card = cards[index];
    if (flippedCards.length === 0) {
      setFlippedCards([card]);
      setCards(
        cards.map((c, i) => (i === index ? { ...c, flipped: true } : c))
      );
    } else if (flippedCards.length === 1 && flippedCards[0].value !== card.value) {
      setFlippedCards([...flippedCards, card]);
      setCards(
        cards.map((c, i) =>
          i === index || c.value === flippedCards[0].value
            ? { ...c, flipped: true }
            : c
        )
      );
    }
  };

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col xs={6} md={3} key={index}>
            <Card
              value={card.value}
              flipped={card.flipped}
              solved={solvedCards.includes(card.value)}
              onClick={() => handleClick(index)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
