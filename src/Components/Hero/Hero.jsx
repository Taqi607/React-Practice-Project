import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import pause_icon from "../../Assets/pause_icon.png";
import play_icon from "../../Assets/play_icon.png";

const Hero = ({
  setHeroCount,
  heroData,
  setPlayVideo,
  heroCount,
  playVideo,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} />
      </div>
      <div className="box-play">
        <ul className="dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "dot orange" : "dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "dot orange" : "dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "dot orange" : "dot"}
          ></li>
        </ul>
        <div className="video-play">
          <img
            onClick={() => setPlayVideo(!playVideo)}
            src={playVideo ? pause_icon : play_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
