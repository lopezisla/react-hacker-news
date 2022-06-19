import "./Header.css";
import logo from '../assets/hacker-news.png';
const Header = () => {
  return (
    <div className="Header-Container"> 
      <img src={logo} className="HACKER-NEWS"/>
    </div>
  );
};

export default Header;
