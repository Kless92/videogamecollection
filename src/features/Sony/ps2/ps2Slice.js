import { PLAYSTATION2 } from '../../../app/shared/PLAYSTATION2GAMES'

export const selectAll = () => {
    return PLAYSTATION2;
};

export const selectPs2ById = (id) => {
    return PLAYSTATION2.find((games) => games.id === parseInt(id));
};