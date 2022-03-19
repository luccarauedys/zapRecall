import React from 'react';
import './Flashcard.css';
import IconArrow from '../../images/arrow.svg';

export default function Flashcard({ question, handleComplete }) {
  const [isBack, setIsBack] = React.useState(false);

  return (
    <>
      {!isBack && (
        <div className="flashcard front" onClick={() => setIsBack(true)}>
          <p className="flashcard_text">{question.text}</p>
          <img className="flashcard_arrow" src={IconArrow} alt="Icon" />
        </div>
      )}

      {isBack && (
        <div className="flashcard back">
          <p className="flashcard_text">{question.answer}</p>
          <div className="flashcard_buttons">
            <Button
              className={'flashcard_button btn_red'}
              handleClick={() => handleComplete('bad')}
              text={'Não lembrei'}
            />
            <Button
              className={'flashcard_button btn_yellow'}
              handleClick={() => handleComplete('medium')}
              text={'Quase não lembrei'}
            />
            <Button
              className={'flashcard_button btn_green'}
              handleClick={() => handleComplete('good')}
              text={'Zap'}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ className, handleClick, text }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
