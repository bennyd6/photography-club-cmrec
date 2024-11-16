import './header.css';
import logo from '../assets/CMR-Main-Logo-Final.png';
import logo_2 from '../assets/p-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="logo-main">
      <img src={logo} className='logo' alt="Logo" />
      <a to="/">Home</a>
      <a to="#achievements">Achievements</a>
      <a to="/team">About Team</a>
      <a to="/contact">Contact us</a>
    </div>
  );
}
