import { useCounter } from '../hooks/useCounter';
import { usePokemon } from '../hooks/usePokemon';

export const PokemonPage = () => {
  const {
    // Properties
    counter,

    // Methods
    increment,
    decrement,
  } = useCounter(1);

  const {
    // Properties
    pokemon,
    isLoading,

    // Computed
    formattedId,
  } = usePokemon({ id: counter });

  if (isLoading) return <div className="text-white">Loading...</div>;

  if (!pokemon) return <div className="text-white">No pokemon found</div>;

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{formattedId} {pokemon.name}
      </h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
        alt=""
      />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={decrement}
        >
          Anterior
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={increment}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
