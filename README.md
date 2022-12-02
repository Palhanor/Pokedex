# Pokedex


## Projeto
...

## Próximos passos

1. Mais para frente eu poderia passar todos os estilos para Styled Components, ou ao menos para o SCSS. Mas por enquanto eu estou achando melhor desenvolver com CSS puro mesmo!
2. Além disso, eu preciso fazer a passagem de pokemons ser referente a lista que esta sendo exibida, e não a lista completa. Mas existem alguns problemas:
   * Quando carrega, tem sempre que começar com o pokemon de ID 1 - Isso em si não é o problema, mas se quando carregar eu já mudar para um novo filtro, vou precisar atualizar o selected para o primeiro da nova lista filtrada, mas eu não vou ter acesso ao ID dele logo de cara, enquanto eu sempre sei que no geral o ID vai ser 1. O sistema precisaria entao trabalhar com o indice do objeto no array, e nao mais com seu ID.
   * Além disso, vou precisar de um outro state com um array contendo os pokemons filtrados, o que geraria duplicação de dados e muita reenderização toda vez que o input ou o filtro mudasse.
   * Por fim, se for feita uma busca que nao tiver resultado, simplesmente nao vai dar para exibir nada no card, e ai o sistema vai dar uma quebrada... Tavez nesse caso tivesse que gerar uma permanencia do ultimo pokemon exibido...
3. Ah, e eu tenho que pensar em um redesign para a versão mobile e quebrar a cabeça para fazer os ajustes no design e na dinâmica necessários para essa mídia em questão. Mas eu realmente não tenho nenhuma ideia agora, até por que eu be baseei em um design feito para desktop, então não pensei muito mobile-first para esse projeto em questão... Infelizmente.

## Créditos

* [AC1 Design](https://www.behance.net/angioletto1e90), criador do [design](https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects%7CPokedex) usado como base para a construção da interface.
* [Darius Dan](https://www.flaticon.com/authors/darius-dan), autor da [ilustração](https://www.flaticon.com/free-icon/pokeball_743977?term=pokeball&page=1&position=6&page=1&position=6&related_id=743977&origin=tag) usada como ícone do site.