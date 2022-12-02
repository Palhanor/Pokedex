import { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import Stats from "./Stats";
import { IBigCardProps } from "../../interfaces/props";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import "./style.css";

type ITabs = "about" | "stats" | "moves";

export default function BigCard({
  pokemon,
  nextPokemon,
  previousPokemon,
}: IBigCardProps) {
  const [activeTab, setActiveTab] = useState<ITabs>("about"); // Armazena o estado atual da aba que esta ativa
  const [pokemonsDetails, setPokemonDetails] = useState<any>({}); // Armazena o objeto contendo os dados adicionais do pokemons selecionado

  // Faz a requisicao dos dados adicionais do pokemon selecionado
  const requestPokemonDetails = async () => {
    const axiosResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon ? pokemon.id : 1}/`
    );
    setPokemonDetails(() => axiosResponse.data);
  };

  // Executa a requisicao toda vez que recebe um novo pokemon
  useEffect(() => {
    requestPokemonDetails();
  }, [pokemon]);

  return (
    <div className="card_container">
      {pokemon && (
        <>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`${pokemon.name}`}
          />
          <div className="name">
            <h1>{pokemon.name}</h1>
            <p className="index">#{pokemon.id}</p>
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
              habitat={pokemonsDetails.habitat?.name}
              abilities={pokemon.abilities}
              generation={pokemonsDetails.generation.name
                .replace("generation-", "")
                .toUpperCase()}
              description={
                pokemonsDetails.flavor_text_entries[
                  pokemonsDetails.flavor_text_entries
                    .map((e: any) => e.language.name)
                    .indexOf("en")
                ].flavor_text
              }
            />
          )}
          {activeTab === "stats" && (
            <Stats
              xp={pokemon.base_experience}
              height={pokemon.height}
              weight={pokemon.weight}
              capture={pokemonsDetails.capture_rate}
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
          <div>
            <div
              className={`emblem ${
                pokemonsDetails.gender_rate === 8 ? "female" : "male"
              }`}
            >
              {pokemonsDetails.gender_rate === 8 ? (
                <BiFemaleSign size={18} color="#c470a4" />
              ) : (
                <BiMaleSign size={18} color="#727ec2" />
              )}
            </div>
            {pokemonsDetails.is_legendary && (
              <div className="emblem legendary">
                {pokemonsDetails.is_legendary && (
                  <AiFillTrophy size={18} color="#ffd900bb" />
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
