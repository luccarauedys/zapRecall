import './Footer.css';
import Result from '../Result/Result';
import IconBad from '../../images/bad.svg';
import IconMedium from '../../images/medium.svg';
import IconGood from '../../images/good.svg';

export default function Footer({ situations }) {
  return (
    <footer className="footer">
      {situations.length === 8 ? (
        <Result situations={situations} />
      ) : (
        <p className="footer_counter">{situations.length}/8 CONCLUÍDOS</p>
      )}

      <div className="footer_icons">
        {situations.map((situation, index) => (
          <IconFooter key={index} situation={situation} />
        ))}
      </div>
    </footer>
  );
}

function IconFooter({ situation }) {
  return (
    <>
      {situation === 'bad' && (
        <img className="footer_icon" src={IconBad} alt="Icon" />
      )}
      {situation === 'medium' && (
        <img className="footer_icon" src={IconMedium} alt="Icon" />
      )}
      {situation === 'good' && (
        <img className="footer_icon" src={IconGood} alt="Icon" />
      )}
    </>
  );
}
