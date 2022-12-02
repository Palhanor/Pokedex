import Pokemon from "./Pokemon";

export interface ISmallCardProps {
    pokemon: Pokemon;
    selected: number;
    handleClickCard: (index: number) => void;
}

export interface IBigCardProps {
    pokemon: Pokemon;
    nextPokemon: () => void;
    previousPokemon: () => void;
}

export interface IAboutProps {
    description: string;
    generation: string;
    habitat: string;
    abilities: string[];
}

export interface IStatsProps {
    xp: number;
    height: string;
    weight: string;
    capture: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
}

export interface ISearchProps {
    search: string;
    filter: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

