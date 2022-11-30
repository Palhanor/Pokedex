// Fazer os ajustes de responsividade para desktop
// Implementar o sistema de busca
// => se tiver menos de 151, executar um loop fazendo as requisicoes ate acabar tudo para ir exibindo o que esta de acordo

// Criar filtros e ordenadores - ordena ou filtra somente o que foi carregado, e quando desce carrega mais e ja exibe filtrado ou ordenado
// Aplicar responsividade para dar suporte a smartphone com a abordagem mobile-first

import { useCallback, useEffect, useRef, useState } from "react";
import api from "./service/api";
import Header from "./components/Header";
import Buscador from "./components/Search";
import SmallCard from "./components/SmallCard";
import BigCard from "./components/BigCard";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const requesting = useRef<boolean>(false); // Impedir disparo de novas requisições enquanto uma esta sendo realizada
  const alreadyRendered = useRef<boolean>(false); // Evitar dupla chamada na API quando renderiza o componente
  const [pokemons, setPokemons] = useState<any[]>([]); // Lista contendo todos os pokemons com detalhes
  const [selected, setSelected] = useState<number>(0); // Posicao do pokemon selecionado dentro da lista
  const [offset, setOffset] = useState<number>(0); // Valor dos proximos pokemons a serem chamados na API
  const [isFixed, setIsFixed] = useState<boolean>(false); // Verifica se o card principal deve ser fixado

  // Funcao para chamar mais pokemons atraves da PokeAPI
  const requestPokemons = useCallback(async () => {
    // console.log("fazendo requisicao geral")
    try {
      // Pega os nomes dos proximos dez pokemons
      requesting.current = true;
      const responsePokemons = await api.get(`?offset=${offset}&limit=10`);
      const resultPokemons = responsePokemons.data.results;
      // Pegar os dados individuais de cada pokemon
      const daitailedPokemonList: any[] = [];
      for (let i = 0; i < resultPokemons.length; i++) {
        const detailsPokemon = await api.get(`/${resultPokemons[i].name}`);
        if (detailsPokemon.data.id <= 151)
          daitailedPokemonList.push(detailsPokemon.data);
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
    // Chama a função buscar quando chega no fundo da página
    const touchBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    const numberOfPokemons = pokemons.length;
    if (
      touchBottom &&
      numberOfPokemons > 0 &&
      numberOfPokemons < 151 &&
      !requesting.current
    )
      requestPokemons();
    // Fixa ou libera o card grande dependendo da posição do scroll
    if (window.scrollY > 170) setIsFixed(() => true);
    else if (window.scrollY <= 170) setIsFixed(() => false);
  }, [requestPokemons, setIsFixed, pokemons]);

  // Funcao que pega o click no card para selecionar um novo pokemon
  const handleClickCard = (id: number): void => {
    setSelected(() => id - 1);
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
          <Buscador />
          <h2 className="title">Lista de Pokemons</h2>
          <ol className="cards">
            {pokemons.map((pokemon) => (
              <SmallCard
                key={pokemon.id}
                pokemon={pokemon}
                selected={selected}
                handleClickCard={handleClickCard}
              />
            ))}
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
      {requesting && pokemons.length < 151 && <Loading />}
    </>
  );
}

export default App;
