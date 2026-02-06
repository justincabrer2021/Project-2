import { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

const cardSet = {
  title: "Computer Science Trivia",
  description: "Test your knowledge of basic computer science concepts!",
  cards: [
    {
      question: "What does CPU stand for?",
      answer: "Central Processing Unit",
      category: "easy",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/CPU.jpg"
    },
    {
      question: "What language is primarily used for web styling?",
      answer: "CSS",
      category: "easy",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      question: "What data structure uses FIFO?",
      answer: "Queue",
      category: "medium",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg"
    },
    {
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      category: "hard",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
    }
  ]
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRandomCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cardSet.cards.length);
    } while (randomIndex === currentIndex);

    setCurrentIndex(randomIndex);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>{cardSet.title}</h1>
        <p>{cardSet.description}</p>
        <p>Total Cards: {cardSet.cards.length}</p>
      </div>

      <Flashcard card={cardSet.cards[currentIndex]} />

      <button className="next-btn" onClick={nextRandomCard}>
        Next Card 🔀
      </button>
    </div>
  );
};

export default App;
