import React from 'react';
import logo from '../../images/logo.svg';
import './Home.css';

export default function Home() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    isVisible && (
      <div className="home flex-column">
        <div className="home_logo flex-column">
          <img className="home_logo__image" src={logo} alt="Logo ZapRecall" />
          <h1 className="home_logo__title">ZapRecall</h1>
        </div>
        <button className="home_button" onClick={() => setIsVisible(false)}>
          Iniciar Recall!
        </button>
      </div>
    )
  );
}
