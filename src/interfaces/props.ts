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
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string;
        };
    }[];
}

export interface IStatsProps {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
}

