import { SNES } from "../../../app/shared/SNESGAMES"

export const selectAll = () => {
    return SNES;
};

export const selectSNESById = (id) => {
    return SNES.find((games) => games.id === parseInt(id));
};