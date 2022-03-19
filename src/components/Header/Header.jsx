import './Header.css';
import logo from '../images/small-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logo} alt="Logo ZapRecall" />
      <h1 className="header_title">ZapRecall</h1>
    </header>
  );
}
