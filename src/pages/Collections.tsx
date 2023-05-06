import { Fragment, useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import SearchAndFilter from "../components/SearchAndFilter";
import { SavedPokemonContext } from "../context/savedPokemonContext";
import CardLayout from "../layouts/CardLayout";
import { SavedPokemon, Searched } from "../types";

function Collections() {
  const ctx = useContext(SavedPokemonContext);
  const data = ctx?.collections;

  const [searchedAndFiltered, setSearchedAndFiltered] = useState<Searched>({
    name: "",
    type: "",
  });
  const [elChildCount, setElChildCount] = useState<number>(-1);

  const pokemonList = "pokemonList";
  const el = document.getElementById(pokemonList);

  useEffect(() => {
    if (el?.childElementCount !== undefined) {
      setElChildCount(el?.childElementCount);
    } else {
      setElChildCount(-1);
    }
  }, [searchedAndFiltered, setElChildCount, el?.childElementCount]);

  return (
    <>
      <SearchAndFilter setSearchedAndFiltered={setSearchedAndFiltered} />

      {(() => {
        if (data === undefined || data.length < 1)
          return <p className="py-3 text-center">No Pokemon Saved</p>;

        const filtered = data.filter(
          (d: SavedPokemon) =>
            d.name.includes(searchedAndFiltered.name) ||
            d.alias.includes(searchedAndFiltered.name)
        );

        return (
          <>
            {filtered.length < 1 || elChildCount === 0 ? (
              <p className="py-3 text-center">Not Found</p>
            ) : null}

            <CardLayout id={pokemonList}>
              {filtered.map((p: SavedPokemon) => (
                <Fragment key={p.id}>
                  <Card data={p} type={searchedAndFiltered.type} />
                </Fragment>
              ))}
            </CardLayout>
          </>
        );
      })()}
    </>
  );
}

export default Collections;
