import { getPokemonDetails } from "../networks/pokemon";
import { Pokemon, PokemonDetails } from "../types";
import Card from "./Card";

type Props = {
  data: Pokemon;
  type: string;
  handleOpenDialog: (res: PokemonDetails) => void;
};

function PokemonCard({
  data,
  type,
  handleOpenDialog = () => {
    return;
  },
}: Props) {
  const { data: details, isLoading } = getPokemonDetails(data.url);

  if (isLoading) return null;

  const res: PokemonDetails = details;

  return (
    <Card
      data={res}
      isLoading={isLoading}
      type={type}
      handleOpenDialog={handleOpenDialog}
    />
  );
}

export default PokemonCard;
