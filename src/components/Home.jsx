import "../assets/css/Home.css";
import amel from "../assets/images/amel.jpg";

const Home = ({ onNavigate }) => {
  return (
    <div>
      <div>
        <img className="amel1" src={amel} alt="amel" />
        <div className="hoem1">
          <div> SUKMA MELATI</div>
          <div className="home1">
            Web developer | creative designer
          </div>
          <div>
            <button onClick={() => onNavigate("about")}>
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
