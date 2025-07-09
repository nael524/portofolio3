import "../assets/css/Header.css";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub, 
  FaTiktok,
   
} from "react-icons/fa";

const Header = ({ onNavigate, activePage }) => {
  const isActive = (page) => (activePage === page ? "active" : "");

  return (
    <header className="navbar">
      <div className="navbar-left">AMEL</div>

      <nav className="navbar-center">
        <a onClick={() => onNavigate("home")} className={isActive("home")}>
          Home
        </a>
        <a onClick={() => onNavigate("about")} className={isActive("about")}>
          About
        </a>
        <a onClick={() => onNavigate("resume")} className={isActive("resume")}>
          Resume
        </a>
        <a
          onClick={() => onNavigate("contact")}
          className={isActive("contact")}
        >
          Contact
        </a>
        <a onClick={() => onNavigate("skills")} className={isActive("skills")}>
          Skills
        </a>
      </nav>

      <div className="navbar-right">
        <a href="https://www.instagram.com/sukmamellti">
          <FaInstagram className="icon" />
        </a>
      <a href="https://www.facebook.com/share/1HgUZtjDYG">
          <FaFacebookF className="icon" />
        </a>
          <a href=" https://www.tiktok.com/@sukmmellti">
          <FaTiktok className="icon" />
        </a>
         <a href=" https://github.com/sukmamelati">
          <FaGithub className="icon" />
        </a>
         
      </div>
    </header>
  );
};

export default Header;
