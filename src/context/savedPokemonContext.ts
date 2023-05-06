import { createContext } from "react";
import { PokemonCollectionsContext } from "../types";

export const SavedPokemonContext =
  createContext<PokemonCollectionsContext | null>(null);
