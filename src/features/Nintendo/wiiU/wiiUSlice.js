import { WIIU } from '../../../app/shared/WIIUGAMES'

export const selectAll = () => {
    return WIIU;
};

export const selectWiiUById = (id) => {
    return WIIU.find((games) => games.id === parseInt(id));
};