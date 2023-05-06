export const BASE = "https://pokeapi.co/api/v2";

export const POKEMON = {
  GET: {
    pokemon: (offset: number, limit: number) =>
      `/pokemon/?limit=${limit}&offset=${offset}`,
    types: "/type",
  },
};
