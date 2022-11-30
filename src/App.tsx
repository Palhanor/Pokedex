// Adicionar a imagem da pokebola de fundo nos cards
// Adicionar o restante das informações relevantes no card grande
// Criar um sistema para passar o pokemon para o próximo ou anterior no card grande
// => Ver problema caso passe o card para o proximo mas o proximo nao esteja carregado (fazer uma nova requisicao)
// Implementar o sistema de busca
// Criar filtros e ordenadores

import React, { useCallback, useEffect, useRef, useState } from "react";
import api from "./service/api";
import Header from "./components/Header";
import Buscador from "./components/Search";
import SmallCard from "./components/SmallCard";
import BigCard from "./components/BigCard";
import "./App.css";

function App() {
  const requesting = useRef<boolean>(false); // Impedir disparo de novas requisições enquanto uma esta sendo realizada
  const alreadyRendered = useRef<boolean>(false); // Evitar dupla chamada na API quando renderiza o componente
  const [pokemons, setPokemons] = useState<any[]>([]); // Lista contendo todos os pokemons com detalhes
  const [selected, setSelected] = useState<number>(0); // Posicao do pokemon selecionado dentro da lista
  const [offset, setOffset] = useState<number>(0); // Valor dos proximos pokemons a serem chamados
  const [isFixed, setIsFixed] = useState<boolean>(false); // Varifica se o card principal deve ser fixado

  // Funcao para chamar mais pokemons atraves da PokeAPI
  const requestPokemons = useCallback(async () => {
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

  // Funcao que pega o clic no card para selecionar um novo pokemon
  const handleClickCard = (id: number): void => {
    setSelected(() => id - 1);
  };

  // Realizar a busca dos primeiros 10 pokemons com o load da pagina
  useEffect(() => {
    if (!alreadyRendered.current) requestPokemons();
    alreadyRendered.current = true;
  }, []);

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
            <BigCard pokemon={pokemons[selected]} />
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
