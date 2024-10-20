import "../styles/Card.css";

function Card({ pokemon, onClick }) {
  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div
      className="card"
      onClick={() => {
        onClick(pokemon.id);
      }}
    >
      <img src={pokemon.sprites.front_default} alt="" />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Card;
