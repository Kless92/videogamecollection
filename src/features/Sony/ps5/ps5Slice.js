import { PLAYSTATION5 } from '../../../app/shared/PLAYSTATION5GAMES'

export const selectAll = () => {
    return PLAYSTATION5;
};

export const selectPs5ById = (id) => {
    return PLAYSTATION5.find((games) => games.id === parseInt(id));
};