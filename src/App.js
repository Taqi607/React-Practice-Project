import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import NavBar from "./Components/Navbar/NavBar";
import Hero from "./Components/Hero/Hero";

function App() {
  const heroData = [
    {
      text1: "Your Passion",
      text2: "Your Destination",
    },
    {
      text1: "Your Anger",
      text2: "Your Aggression",
    },
    {
      text1: "Your perceptions",
      text2: "Your Minset",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      {" "}
      <Background playVideo={playVideo} heroCount={heroCount} />
      <NavBar />
      <Hero
        setPlayVideo={setPlayVideo}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playVideo={playVideo}
      />
    </div>
  );
}

export default App;
