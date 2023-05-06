import { MutableRefObject, forwardRef, useContext, useState } from "react";
import { SavedPokemonContext } from "../context/savedPokemonContext";
import { PokemonDetails, SavedPokemon } from "../types";
import { uppercaseFirstLetter } from "../utils/utils";
import Button from "./Button";

type Props = {
  currDialogData: PokemonDetails | undefined;
  setCurrDialogData: React.Dispatch<
    React.SetStateAction<PokemonDetails | undefined>
  >;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(function Dialog(
  { currDialogData, setCurrDialogData }: Props,
  ref
) {
  const [alias, setAlias] = useState<string>("");

  const ctx = useContext(SavedPokemonContext);

  const setScroll = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "scroll";
    }
  };

  const handleSavePokemon = () => {
    if (currDialogData !== undefined) {
      const pokemon: SavedPokemon = {
        id: currDialogData.id,
        name: currDialogData.name,
        height: currDialogData.height,
        weight: currDialogData.weight,
        sprites: currDialogData.sprites,
        types: currDialogData.types,
        alias: alias,
      };
      ctx?.savePokemon(pokemon);
    }
    setScroll();
    setAlias("");
  };

  const handleCancel = () => {
    (ref as MutableRefObject<HTMLDialogElement>)?.current?.close();
    setScroll();
    setAlias("");
    setCurrDialogData(undefined);
  };

  return (
    <dialog
      ref={ref}
      className="duration-100 dark:backdrop:bg-gray-600/25 min-w-[15rem] max-w-[30rem] w-[70vh] bg-white rounded-md dark:bg-dark dark:text-white"
    >
      <form method="dialog" className="mx-1 mb-2.5">
        <h5 className="leading-9">
          {uppercaseFirstLetter(
            currDialogData?.name ? currDialogData.name : ""
          )}{" "}
          Alias
        </h5>
        <input
          type="text"
          placeholder="Type in alias..."
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="rounded-md border w-full py-1 px-1.5 dark:bg-dark"
        />

        <div className="flex justify-center gap-3 mt-6">
          <Button
            onClick={handleCancel}
            type="reset"
            className="w-20 bg-red-600"
          >
            Cancel
          </Button>
          <Button
            disabled={!alias}
            type="submit"
            onClick={() => handleSavePokemon()}
            className={`w-20 ${!alias ? "bg-gray-400" : "bg-sky-600"}`}
          >
            Submit
          </Button>
        </div>
      </form>
    </dialog>
  );
});

export default Dialog;
