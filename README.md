<h1 align="center">Pokedex</h1>

## Sobre o Pokedex

Este projeto foi elaborado como um desafio proposto através do [Bootcamp Orange Tech +](https://web.dio.me/track/81278323-8916-401b-8446-03118eaff280) da DIO, tendo como objetivo realizar o consumo de uma API externa, sendo esta a [PokeAPI](https://pokeapi.co/).

Por este ser um projeto já bastante conhecido no mundo Front-end, eu resolvi tentar me diferenciar um pouco dando o melhor de mim para construir uma interface elegante e sofisticada, baseada na [interface](https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects%7CPokedex) do [AC1 Design](https://www.behance.net/angioletto1e90).

Atualmente as requisições são realizadas através de um sistema de scroll infinito, cobrindo todas as gerarções disponíveis de Pokemons. Ainda, existem filtros para os tipos de Pokemon, assim como um sistema de busca por nome ou ID. Por fim, é possível selecionar e visualizar os Pokemons através de um card lateral flutiante que acompanha o scroll sobre a tela, e através deste mesmo card é possível avançar ou retroceder navegando entres os Pokemons já carregados.

---

## Tecnologias

<p align="left">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4" alt="Axios">
</p>

---

## Próximos passos

- [ ] Passar a estilização do CSS puro para alguma biblioteca como o Styled Components ou o Tailwinds.
- [ ] Aplicar responsividade com a adoção de uma nova interface para a versão mobile.
- [ ] Puxar os dados de detalhes, geração, habitat, captura, gênero e lendário para o momento de instanciar cada Pokemon, através de uma nova requisição (está dando erro por ser assíncrono).
- [ ] Adicionar um contexto global através do useContext ou outra biblioteca (Redux ou Recoil), para salvar os dados dos pokemons e o pokemons selecionado.
- [ ] Fazer com que a passagem de Pokemopns seja referente à lista exibido, e não à lista geral (para casos de filtro ou busca).
- [ ] Fazer uma nova requisição quando o usuário for passando os Pokemons até o último atualmente carregado.
- [ ] Ver se existe alguma forma de mitigar o problema de requisições em grupos de 10, para que a filtragem e busca não retorne poucos Pokemons.

---

## Créditos

[AC1 Design](https://www.behance.net/angioletto1e90), criador da [UI](https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects%7CPokedex) usado como base para a construção da interface.

[Darius Dan](https://www.flaticon.com/authors/darius-dan), autor da [ilustração](https://www.flaticon.com/free-icon/pokeball_743977?term=pokeball&page=1&position=6&page=1&position=6&related_id=743977&origin=tag) usada como ícone do site.

---

## Referência Visual

![Imagem da tela final](./src/assets/screenshot.png)
