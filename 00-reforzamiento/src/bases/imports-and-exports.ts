import { heroes, Owner, type IHero } from '../data/heroes';

const getHeroesByOwner = (owner: Owner): IHero[] => {
  return heroes.filter((h) => h.owner === owner);
};

console.log(getHeroesByOwner(Owner.DC));
