import './home.css';
import aw from '../assets/award.jpg';
import p from '../assets/p-logo.png';

export default function Home() {
  const renderSquares = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={index} className="square"></div>
    ));
  };

  return (
    <div className="home-main">
      <div className="home-2">
        <div className="side-1">
          {renderSquares(36)}
        </div>
        <div className="side-2">
          <div className="home-2-1">
            <h1>Aim</h1>
          </div>
          <div className="home-2-2">
            <h1>About</h1>
          </div>
          <div className="home-2-3">
            <h1>Wanna Join us?</h1>
            <button>JOIN</button>
          </div>
        </div>
        <div className="side-3">
          {renderSquares(36)}
        </div>
      </div>
      <div className="home-3">
        <img src={p} alt="Logo" />
      </div>
    </div>
  );
}
