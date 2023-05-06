import { useContext } from "react";
import { SavedPokemonContext } from "../context/savedPokemonContext";
import { PokemonDetails, SavedPokemon } from "../types";
import { uppercaseFirstLetter } from "../utils/utils";
import Button from "./Button";

type Props = {
  data: SavedPokemon | PokemonDetails;
  type: string;
  handleOpenDialog?: (pokemon: PokemonDetails) => void;
  isLoading?: boolean;
};

function Card({
  data,
  type,
  handleOpenDialog = () => {
    return;
  },
  isLoading = false,
}: Props) {
  const ctx = useContext(SavedPokemonContext);

  if (data.types.filter((v) => v.type.name.includes(type)).length === 0)
    return null;

  const isPokemonSaved = ctx?.collections.some((v) => v.id === data.id);

  const handleRemovePokemon = (id: number) => {
    ctx?.removePokemon(id);
  };

  return (
    <div className="flex flex-col justify-between m-3 min-h-[20rem] min-w-[14rem] max-w-[14rem] shadow-md p-4 rounded-md dark:border dark:border-white/20">
      <div className="mb-5">
        <h1 className="text-lg font-semibold leading-10 text-center">
          {uppercaseFirstLetter(data.name)}
        </h1>
        {"alias" in data ? (
          <>
            <p className="text-xs italic font-light text-center">Alias</p>
            <h4 className="text-center">{`(${uppercaseFirstLetter(
              data.alias
            )})`}</h4>
          </>
        ) : null}
        <img
          src={data.sprites.other["official-artwork"].front_default}
          height={112}
          className={`${isLoading && "animate-pulse"} min-h-[7rem] mx-auto`}
        />
        <div>
          <div className="flex">
            <h4 className="flex-initial w-1/3">Weight</h4>
            <span className="flex-none mx-3">:</span>
            <p className="flex-1">{data.weight}</p>
          </div>
          <div className="flex">
            <h4 className="flex-initial w-1/3">Height</h4>
            <span className="flex-none mx-3">:</span>
            <p className="flex-1">{data.height}</p>
          </div>
          <div className="flex">
            <h4 className="flex-initial w-1/3">Types</h4>
            <span className="flex-none mx-3">:</span>
            <ul className="pl-3 list-disc">
              {data.types.map((t) => (
                <li key={t.type.url}>{uppercaseFirstLetter(t.type.name)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Button
        onClick={() =>
          isPokemonSaved ? handleRemovePokemon(data.id) : handleOpenDialog(data)
        }
        className={`text-sm px-3.5 w-full ${
          isPokemonSaved ? "bg-red-600" : "bg-sky-600"
        }`}
      >
        {isPokemonSaved ? "Delete" : "Save"}
      </Button>
    </div>
  );
}

export default Card;
