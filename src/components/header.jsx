import './header.css';
import logo from '../assets/CMR-Main-Logo-Final.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const scrollToAchievements = (e) => {
    e.preventDefault();
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="logo-main">
      <img src={logo} className="logo" alt="Logo" />
      <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
      <a href="#achievements" onClick={scrollToAchievements}>Achievements</a>
      <Link to="/team" className={isActive('/team') ? 'active-link' : ''}>About Team</Link>
      <Link to="/contact" className={isActive('/contact') ? 'active-link' : ''}>Contact us</Link>
    </div>
  );
}
