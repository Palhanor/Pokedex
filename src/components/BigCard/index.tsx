import "./style.css";

export default function BigCard({ pokemon }: { pokemon: any }) {
  return (
    <div className="card_container">
      <img
        src={pokemon ? pokemon.sprites.front_default : ""}
        alt={`Imagem do ${pokemon ? pokemon.name : ""}`}
      />
      <div className="name">
        <h1>{pokemon ? pokemon.name : ""}</h1>
        <p className="indice">#{pokemon ? pokemon.id : ""}</p>
      </div>
      <div className="tags">
        {pokemon &&
          pokemon.types.map((data: any) => (
            <span key={data.type.name} className={`tag ${data.type.name}`}>
              {data.type.name}
            </span>
          ))}
      </div>
    </div>
  );
}
