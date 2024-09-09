import { GAMECUBE } from "../../../app/shared/GAMECUBEGAMES"

export const selectAll = () => {
    return GAMECUBE;
};

export const selectGamecubeById = (id) => {
    return GAMECUBE.find((games) => games.id === parseInt(id));
};