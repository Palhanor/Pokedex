import { ISmallCardProps } from "../../interfaces/props";
import "./style.css";

export default function SmallCard({
  pokemon,
  selected,
  handleClickCard,
}: ISmallCardProps) {
  return (
    <li
      className={`card ${pokemon.index - 1 === selected ? "selected" : ""}`}
      onClick={() => handleClickCard(pokemon.index)}
    >
      <img src={pokemon.image} alt={`${pokemon.name}`} />
      <div className="name">
        <h3>{pokemon.name}</h3>
        <p>#{pokemon.index}</p>
      </div>
      <div>
        {pokemon.types.map((type: string) => (
          <span key={type} className={`tag ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </li>
  );
}
