import { MdOutlineCatchingPokemon } from "react-icons/md";
import { ISearchProps } from "../../interfaces/props";
import "./style.css";

export default function Search({ search, setSearch }: ISearchProps) {
  return (
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
  );
}
