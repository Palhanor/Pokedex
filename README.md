# Pokedex


## Projeto
...

## Próximos passos

1. Eu integrar os campos de detalhes, geração, habitat, captura, genero e lendario dentro do objeto pokemon instanciado da classe Pokemon, mas como a requisição é feita antes de receber o objeto, quebra tudo quando tento declarar o pokemon.setDescription... Outra opção seria criar outra classe, como PokeDetails que vai instanciar um objeto que vai ser usado para manipular os valores adicionais. Ah, e tamb´´em daria para ter um contexto global através do useContext que salvaria a lista de pokemons e o selected, assim todos os componentes teriam acesso sem precisar esperar chegar através de params.
2. Preciso também fazer a passagem de pokemons ser referente a lista que esta sendo exibida, e não a lista completa. Quando filtrasse teria que manter o que esta selecionado atualmente, mas ao clicar em qualquer pokemon, ao pressionar em anterior ou proximo teria que navegar entre aqueles atualmente aparecendo nos cards. Mas sso poderia gerar uma duplicacao de lista, e tambem iria querer uma mudanca na forma de selecao, pois o pokemon selecionado nao seria mais pelo id, mas sim pela posicao na lista exibida.
3. E eu ainda tenho que pensar em um redesign para a versão mobile e quebrar a cabeça para fazer os ajustes no design e na dinâmica necessários para essa mídia em questão. Mas eu realmente não tenho nenhuma ideia agora, até por que eu be baseei em um design feito para desktop, então não pensei muito mobile-first para esse projeto em questão... Infelizmente.
4. Mais para frente eu poderia passar todos os estilos para Styled Components, ou ao menos para o SCSS. Mas por enquanto eu estou achando melhor desenvolver com CSS puro mesmo!

## Créditos

* [AC1 Design](https://www.behance.net/angioletto1e90), criador do [design](https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects%7CPokedex) usado como base para a construção da interface.
* [Darius Dan](https://www.flaticon.com/authors/darius-dan), autor da [ilustração](https://www.flaticon.com/free-icon/pokeball_743977?term=pokeball&page=1&position=6&page=1&position=6&related_id=743977&origin=tag) usada como ícone do site.