export interface Pokemon {
  url: string;
  name: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: Sprites; // image
  weight: number;
  height: number;
  types: Types[];
}

export interface PokemonType {
  url?: string;
  name: string;
}

export interface PokemonCollectionsContext {
  collections: SavedPokemon[];
  savePokemon: (pokemon: SavedPokemon) => void;
  removePokemon: (id: number) => void;
}

export interface SavedPokemon extends PokemonDetails {
  alias: string;
}

export interface Searched {
  name: string;
  type: string;
}

interface Types {
  type: PokemonType;
}

interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}
