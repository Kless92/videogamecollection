import { WII } from "../../../app/shared/WIIGAMES"

export const selectAll = () => {
    return WII;
};

export const selectWiiById = (id) => {
    return WII.find((games) => games.id === parseInt(id));
};