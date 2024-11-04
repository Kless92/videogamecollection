import { GAMEBOYADVANCE } from "../../../app/shared/GAMEBOYADVANCEGAMES";

export const selectAll = () => {
    return GAMEBOYADVANCE;
};

export const selectGameBoyAdvanceById = (id) => {
    return GAMEBOYADVANCE.find((games) => games.id === parseInt(id));
};