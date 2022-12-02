import { MdOutlineCatchingPokemon } from "react-icons/md";
import { ISearchProps } from "../../interfaces/props";
import "./style.css";

export default function Search({
  search,
  filter,
  setSearch,
  setFilter,
}: ISearchProps) {
  const types = [
    "all",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <div className="tools">
      <div className="search">
        <input
          type="text"
          placeholder='Ex: "Pikachu" or "25"'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <MdOutlineCatchingPokemon size={26} color={"#e80b3e"} />
        </button>
      </div>
      <div className="filter">
        <select
          name="tag"
          onChange={(e) => setFilter(() => e.target.value)}
          defaultValue={filter}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
