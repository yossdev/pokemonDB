import { Fragment, useEffect, useRef, useState } from "react";
import spinner from "../assets/1479.gif";
import Dialog from "../components/Dialog";
import PokemonCard from "../components/PokemonCard";
import SearchAndFilter from "../components/SearchAndFilter";
import CardLayout from "../layouts/CardLayout";
import { getPokemon } from "../networks/pokemon";
import { Pokemon, PokemonDetails, Searched } from "../types";

function Home() {
  const { data, isLoading } = getPokemon(300);
  const [searchedAndFiltered, setSearchedAndFiltered] = useState<Searched>({
    name: "",
    type: "",
  });

  const [elChildCount, setElChildCount] = useState<number>(-1);
  const [currDialogData, setCurrDialogData] = useState<PokemonDetails>();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const pokemonList = "pokemonList";
  const el = document.getElementById(pokemonList);

  const handleOpenDialog = (res: PokemonDetails) => {
    dialogRef.current?.showModal();
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    }
    setCurrDialogData(res);
  };

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

      {isLoading ? (
        <div className="h-[15rem] flex justify-center items-center">
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <>
          {(() => {
            const filtered = data.results.filter((d: Pokemon) =>
              d.name.includes(searchedAndFiltered.name)
            );

            return (
              <>
                {filtered.length < 1 || elChildCount === 0 ? (
                  <p className="py-3 text-center">Not Found</p>
                ) : null}

                <CardLayout id={pokemonList}>
                  {filtered.map((p: Pokemon) => (
                    <Fragment key={p.url}>
                      <PokemonCard
                        data={p}
                        type={searchedAndFiltered.type}
                        handleOpenDialog={handleOpenDialog}
                      />
                    </Fragment>
                  ))}
                </CardLayout>
              </>
            );
          })()}
        </>
      )}

      <Dialog
        ref={dialogRef}
        currDialogData={currDialogData}
        setCurrDialogData={setCurrDialogData}
      />
    </>
  );
}

export default Home;
