import { GAMEBOY } from "../../../app/shared/GAMEBOYGAMES"

export const selectAll = () => {
    return GAMEBOY;
};

export const selectGameBoyById = (id) => {
    return GAMEBOY.find((games) => games.id === parseInt(id));
};