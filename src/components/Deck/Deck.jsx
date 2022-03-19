import React from 'react';
import './Deck.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import { questions } from './questions.js';

export default function Deck() {
  const [situations, setSituations] = React.useState([]);

  return (
    <div>
      <Header />
      <section className="deck flex-column">
        {questions.map((question, index) => (
          <Card
            key={question.id}
            question={question}
            index={index}
            situations={situations}
            setSituations={setSituations}
          />
        ))}
      </section>
      <Footer situations={situations} />
    </div>
  );
}
