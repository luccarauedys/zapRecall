import './Result.css';
import success from '../../images/success.svg';
import failure from '../../images/failure.svg';

export default function Result({ situations }) {
  return <>{situations.includes('bad') ? <Failure /> : <Success />}</>;
}

function Success() {
  return (
    <div className="footer_result">
      <div className="result_header">
        <img className="result_header__icon" src={success} alt="Icon" />
        <h3 className="result_header__title">PARABÉNS</h3>
      </div>
      <p className="result_text">Você não esqueceu de nenhum flashcard!</p>
    </div>
  );
}

function Failure() {
  return (
    <>
      <div className="result_header">
        <img className="result_header__icon" src={failure} alt="Icon" />
        <h3 className="result_header__title">PUTZ!</h3>
      </div>
      <p className="result_text">Ainda faltaram alguns... Mas não desanime!</p>
    </>
  );
}
