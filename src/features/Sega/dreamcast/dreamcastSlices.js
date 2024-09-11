import { DREAMCAST } from '../../../app/shared/DREAMCASTGAMES'

export const selectAll = () => {
    return DREAMCAST;
};

export const selectDreamcastById = (id) => {
    return DREAMCAST.find((games) => games.id === parseInt(id));
};