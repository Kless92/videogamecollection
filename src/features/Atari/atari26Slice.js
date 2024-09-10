import { ATARI2600 } from '../../app/shared/ATARI2600GAMES'

export const selectAll = () => {
    return ATARI2600;
};

export const selectAtari26ById = (id) => {
    return ATARI2600.find((games) => games.id === parseInt(id));
};