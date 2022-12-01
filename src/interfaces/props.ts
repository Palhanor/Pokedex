export interface ISmallCardProps {
    pokemon: any;
    selected: number;
    handleClickCard: (id: number) => void;
}

export interface IBigCardProps {
    pokemon: any;
    nextPokemon: () => void;
    previousPokemon: () => void;
}

export interface IAboutProps {
    description: string;
    generation: string;
    habitat: string;
    abilities: {
        ability: {
            name: string;
        };
    }[];
}

export interface IStatsProps {
    xp: number;
    height: number;
    weight: number;
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
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

