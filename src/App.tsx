import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SavedPokemonContext } from "./context/savedPokemonContext";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/404";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import { SavedPokemon } from "./types";

function App() {
  const [collections, setCollections] = useState<SavedPokemon[]>([]);

  const savePokemon = (pokemon: SavedPokemon) => {
    setCollections((prev) => {
      const newData = prev.slice();
      newData.push(pokemon);
      return newData;
    });
  };

  const removePokemon = (id: number) => {
    setCollections(collections.filter((v) => v.id !== id));
  };

  return (
    <SavedPokemonContext.Provider
      value={{ collections, savePokemon, removePokemon }}
    >
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </SavedPokemonContext.Provider>
  );
}

export default App;
