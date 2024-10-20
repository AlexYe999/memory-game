import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App({ pokemons }) {
  const [list, setList] = useState([]);
  const [currentHighScore, setHighScore] = useState(0);
  const curr = list.length;

  useEffect(() => {
    if (curr > currentHighScore) {
      setHighScore(curr);
    }
  }, [curr, currentHighScore]);

  function onClick(id) {
    setList((prevList) => (prevList.includes(id) ? [] : [...prevList, id]));
  }

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  useEffect(() => {
    shuffle(pokemons);
  }, [list, pokemons]);

  const cards = pokemons.map((x) => {
    return <Card pokemon={x} key={x.id} onClick={onClick} />;
  });

  return (
    <>
      <h1>Memory Game</h1>
      <div className="scores">
        <div className="currScore">Score: {curr}</div>
        <div className="hiScore">High Score: {currentHighScore}</div>
      </div>
      <div className="gameGrid">{cards}</div>
    </>
  );
}

export default App;
