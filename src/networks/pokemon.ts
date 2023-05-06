/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { BASE, POKEMON } from "./endpoints";

export const getPokemonTypes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", "types"],
    queryFn: async () => {
      const response = await fetch(BASE + POKEMON.GET.types);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    },
  });

  return { data, isLoading };
};

export const getPokemon = (size: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const response = await fetch(BASE + POKEMON.GET.pokemon(0, size));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    },
  });

  return { data, isLoading };
};

export const getPokemonDetails = (url: string) => {
  const id = url.split("/").at(-2);
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    },
  });

  return { data, isLoading };
};
