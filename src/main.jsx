import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let pokemons = [];
let ids = [];
while (ids.length < 52) {
  let id = Math.floor(Math.random() * 1000) + 1;
  if (ids.indexOf(id) === -1) {
    ids.push(id);
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const json = await api.json();
    pokemons.push(json);
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App pokemons={pokemons} />
  </StrictMode>
);
