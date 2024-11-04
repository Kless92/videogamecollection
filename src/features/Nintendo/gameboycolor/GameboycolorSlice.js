import { GAMEBOYCOLOR } from "../../../app/shared/GAMEBOYCOLORGAMES"

export const selectAll = () => {
    return GAMEBOYCOLOR;
};

export const selectGameBoyColorById = (id) => {
    return GAMEBOYCOLOR.find((games) => games.id === parseInt(id));
};