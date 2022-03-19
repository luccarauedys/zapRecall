import React from 'react';
import './Card.css';
import Flashcard from '../Flashcard/Flashcard';
import IconStart from '../../images/start.svg';
import IconBad from '../../images/bad.svg';
import IconMedium from '../../images/medium.svg';
import IconGood from '../../images/good.svg';

export default function Card({ question, index, situations, setSituations }) {
  const [active, setActive] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [situation, setSituation] = React.useState('');

  function handleComplete(string) {
    setActive(false);
    setCompleted(true);
    setSituation(string);
    setSituations([...situations, string]);
  }

  return (
    <>
      {!active && !completed && (
        <div className="card" onClick={() => setActive(true)}>
          <h3 className="card_title">Pergunta {index + 1}</h3>
          <img className="card_icon" src={IconStart} alt="Icon" />
        </div>
      )}

      {active && !completed && (
        <Flashcard question={question} handleComplete={handleComplete} />
      )}

      {completed && (
        <div className="card">
          <h3 className={`card_title ${situation}`}>Pergunta {index + 1}</h3>
          {situation === 'bad' && <IconCard src={IconBad} />}
          {situation === 'medium' && <IconCard src={IconMedium} />}
          {situation === 'good' && <IconCard src={IconGood} />}
        </div>
      )}
    </>
  );
}

function IconCard({ src }) {
  return <img className="card_icon" src={src} alt="Icon" />;
}
