import { PLAYSTATION4 } from '../../../app/shared/PLAYSTATION4GAMES'

export const selectAll = () => {
    return PLAYSTATION4;
};

export const selectPs4ById = (id) => {
    return PLAYSTATION4.find((games) => games.id === parseInt(id));
};