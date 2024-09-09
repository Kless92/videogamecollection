import { NES } from "../../../app/shared/NESGAMES"

export const selectAll = () => {
    return NES;
};

export const selectNESById = (id) => {
    return NES.find((games) => games.id === parseInt(id));
};