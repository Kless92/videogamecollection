import { SWITCH } from '../../../app/shared/SWITCHGAMES';

export const selectAll = () => {
    return SWITCH;
};

export const selectSwitchById = (id) => {
    return SWITCH.find((games) => games.id === parseInt(id));
};