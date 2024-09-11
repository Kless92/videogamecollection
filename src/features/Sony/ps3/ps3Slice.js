import { PLAYSTATION3 } from '../../../app/shared/PLAYSTATION3GAMES'

export const selectAll = () => {
    return PLAYSTATION3;
};

export const selectPs3ById = (id) => {
    return PLAYSTATION3.find((games) => games.id === parseInt(id));
};