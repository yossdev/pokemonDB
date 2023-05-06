import { useEffect, useState } from "react";
import { getPokemonTypes } from "../networks/pokemon";
import { PokemonType } from "../types";
import { uppercaseFirstLetter } from "../utils/utils";

type Props = {
  setSearchedAndFiltered: React.Dispatch<
    React.SetStateAction<{ name: string; type: string }>
  >;
};

function SearchAndFilter({ setSearchedAndFiltered }: Props) {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const { data: types, isLoading } = getPokemonTypes();

  useEffect(() => {
    setSearchedAndFiltered({ name: query, type: selectedType });
  }, [query, selectedType, setSearchedAndFiltered]);

  return (
    <div className="sticky top-0 flex py-5 duration-100 bg-white dark:bg-dark">
      <input
        type="text"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-md border w-full py-1 px-1.5 dark:bg-dark"
      />

      <label htmlFor="type" className="pl-5 pr-1.5">
        <span className="inline-block align-middle">Type:</span>
      </label>
      <select
        id="type"
        name="Type"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-1 border rounded-md dark:bg-dark"
      >
        <option value="">All</option>
        {isLoading
          ? null
          : types.results.map((type: PokemonType) => (
              <option key={type.name} value={type.name}>
                {uppercaseFirstLetter(type.name)}
              </option>
            ))}
      </select>
    </div>
  );
}

export default SearchAndFilter;
