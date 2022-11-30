import { useState } from "react";
import About from "./About";
import Stats from "./Stats";
import "./style.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { IBigCardProps } from "../../interfaces/props";

export default function BigCard({
  pokemon,
  nextPokemon,
  previousPokemon,
}: IBigCardProps) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="card_container">
      {pokemon && (
        <>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`Imagem do ${pokemon.name}`}
          />
          <div className="name">
            <h1>{pokemon.name}</h1>
            <p className="indice">#{pokemon.id}</p>
          </div>
          <div className="tags">
            {pokemon.types.map((data: any) => (
              <span key={data.type.name} className={`tag ${data.type.name}`}>
                {data.type.name}
              </span>
            ))}
          </div>
          <div className="menu">
            <p
              className={`${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab(() => "about")}
            >
              About
            </p>
            <p
              className={`${activeTab === "stats" ? "active" : ""}`}
              onClick={() => setActiveTab(() => "stats")}
            >
              Stats
            </p>
            <p
              className={`${activeTab === "moves" ? "active" : ""}`}
              onClick={() => setActiveTab(() => "moves")}
            >
              Moves
            </p>
          </div>
          {activeTab === "about" && (
            <About
              height={pokemon.height}
              weight={pokemon.weight}
              abilities={pokemon.abilities}
            />
          )}
          {activeTab === "stats" && (
            <Stats
              hp={pokemon.stats[0].base_stat}
              attack={pokemon.stats[1].base_stat}
              defense={pokemon.stats[2].base_stat}
              speed={pokemon.stats[5].base_stat}
              spAttack={pokemon.stats[3].base_stat}
              spDefense={pokemon.stats[4].base_stat}
            />
          )}
          {activeTab === "moves" && (
            <div className="moves">
              {pokemon.moves.map((value: any) => (
                <span key={value.move.name}>{value.move.name}</span>
              ))}
            </div>
          )}
          <div className="controls">
            <button onClick={previousPokemon}>
              <FiArrowLeft size={30} color="#FFF" />
            </button>
            <button onClick={nextPokemon}>
              <FiArrowRight size={30} color="#FFF" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
