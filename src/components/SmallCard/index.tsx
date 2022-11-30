import { ISmallCardProps } from "../../interfaces/props";
import "./style.css";

export default function SmallCard({
  pokemon,
  selected,
  handleClickCard,
}: ISmallCardProps) {
  return (
    <li
      className={`card ${pokemon.id - 1 === selected ? "selected" : ""}`}
      onClick={() => handleClickCard(pokemon.id)}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={`Imagem do ${pokemon.name}`}
      />
      <h3>{pokemon.name}</h3>
      <p>#{pokemon.id}</p>
      <div>
        {pokemon.types.map((data: any) => (
          <span key={data.type.name} className={`tag ${data.type.name}`}>
            {data.type.name}
          </span>
        ))}
      </div>
    </li>
  );
}
