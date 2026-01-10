import { useEffect, useState } from 'react';

export interface IUsePokemonProps {
  id: number;
}

export interface IPokemon {
  id: number;
  name: string;
  imageUrl: string;
}

export const usePokemon = ({ id }: IUsePokemonProps) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPokemonById = async (id: number) => {
    setIsLoading(true);

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await resp.json();

    setPokemon({
      id: data.id,
      name: data.name,
      imageUrl: data.sprites.front_default,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    // Properties
    isLoading,
    pokemon,

    // Computed
    formattedId: id.toString().padStart(3, '0'),
  };
};
