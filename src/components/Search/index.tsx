import { MdOutlineCatchingPokemon } from "react-icons/md";
import "./style.css";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Encontre seu Pokemon!" />
      <button>
        <MdOutlineCatchingPokemon size={26} color={"#e80b3e"} />
      </button>
    </div>
  );
}
