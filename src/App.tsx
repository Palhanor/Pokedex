import { useCallback, useEffect, useRef, useState } from "react";
import api from "./service/api";
import Pokemon from "./interfaces/Pokemon";
import Header from "./components/Header";
import Search from "./components/Search";
import SmallCard from "./components/SmallCard";
import BigCard from "./components/BigCard";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const requesting = useRef<boolean>(false); // Impedir disparo de novas requisições enquanto uma esta sendo realizada
  const alreadyRendered = useRef<boolean>(false); // Evitar dupla chamada na API quando renderiza o componente
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Lista contendo todos os pokemons com detalhes
  const [selected, setSelected] = useState<number>(0); // Posicao do pokemon selecionado dentro da lista (index - 1)
  const [offset, setOffset] = useState<number>(0); // Valor dos proximos pokemons a serem chamados na API
  const [isFixed, setIsFixed] = useState<boolean>(false); // Verifica se o card principal deve ser fixado
  const [search, setSearch] = useState<string>(""); // Valor do input de busca por pokemons
  const [filter, setFilter] = useState<string>("all"); // Valor do filtro de tags dos pokemons

  // Funcao para chamar mais pokemons atraves da PokeAPI
  const requestPokemons = useCallback(async () => {
    try {
      requesting.current = true;
      const responsePokemons = await api.get(`?offset=${offset}&limit=10`);
      const resultPokemons = responsePokemons.data.results;
      const daitailedPokemonList: Pokemon[] = [];
      for (let i = 0; i < resultPokemons.length; i++) {
        const detailsPokemon = await api.get(`/${resultPokemons[i].name}`);
        const pokeInfo = detailsPokemon.data;
        const pokemon = new Pokemon(
          pokeInfo.name,
          pokeInfo.sprites.other["official-artwork"].front_default,
          pokeInfo.id,
          pokeInfo.base_experience,
          pokeInfo.height,
          pokeInfo.weight,
          pokeInfo.stats[0].base_stat,
          pokeInfo.stats[1].base_stat,
          pokeInfo.stats[2].base_stat,
          pokeInfo.stats[3].base_stat,
          pokeInfo.stats[4].base_stat,
          pokeInfo.stats[5].base_stat,
          pokeInfo.types.map((data: any) => data.type.name),
          pokeInfo.abilities.map((data: any) => data.ability.name),
          pokeInfo.moves.map((data: any) => data.move.name)
        );
        daitailedPokemonList.push(pokemon);
      }
      setPokemons((currentPokemons) => [
        ...currentPokemons,
        ...daitailedPokemonList,
      ]);
      setOffset((value) => value + 10);
      requesting.current = false;
    } catch (e) {
      console.log(e);
    }
  }, [requesting, offset, setPokemons, setOffset]);

  // Funcao para verificar o scroll na pagina
  const handleScroll = useCallback(() => {
    const touchBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    const numberOfPokemons = pokemons.length;
    if (touchBottom && numberOfPokemons > 0 && !requesting.current)
      requestPokemons();
    if (window.scrollY > 170) setIsFixed(() => true);
    else if (window.scrollY <= 170) setIsFixed(() => false);
  }, [requestPokemons, setIsFixed, pokemons]);

  // Funcao que pega o click no card para selecionar um novo pokemon
  const handleClickCard = (index: number): void => {
    setSelected(() => index - 1);
  };

  // Funcao que retrocede o pokemon selecionado para o anterior
  const previousPokemon = () => {
    if (selected > 0) setSelected((value) => value - 1);
  };

  // Funcao que avanca o pokemon selecionado para o proximo
  const nextPokemon = () => {
    if (selected < pokemons.length - 1) setSelected((value) => value + 1);
  };

  // Realizar a busca dos primeiros 10 pokemons com o load da pagina
  useEffect(() => {
    if (!alreadyRendered.current) requestPokemons();
    alreadyRendered.current = true;
  });

  // Realizar a manipulacao da funcao de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Header />
      <main className="main">
        <section>
          <Search
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />
          <h2 className="title">List of Pokemons</h2>
          <ol className="cards">
            {pokemons.map((pokemon: Pokemon) => {
              const searchingName = pokemon.name.includes(search.toLowerCase());
              const searchingIndex = pokemon.index === Number(search);
              const filteringType = pokemon.types.includes(filter);
              const typeIsAll = filter === "all";
              if (
                (searchingName || searchingIndex) &&
                (filteringType || typeIsAll)
              )
                return (
                  <SmallCard
                    key={pokemon.index}
                    pokemon={pokemon}
                    selected={selected}
                    handleClickCard={handleClickCard}
                  />
                );
            })}
          </ol>
        </section>
        <aside className="pokemon">
          <div className={`card_pokemon ${isFixed ? "fixed" : "not-fixed"}`}>
            <BigCard
              pokemon={pokemons[selected]}
              nextPokemon={nextPokemon}
              previousPokemon={previousPokemon}
            />
          </div>
        </aside>
      </main>
      {requesting && <Loading />}
    </>
  );
}

export default App;
