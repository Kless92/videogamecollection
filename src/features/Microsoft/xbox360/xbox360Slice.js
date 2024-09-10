import { XBOX360 } from "../../../app/shared/XBOX360GAMES"

export const selectAll = () => {
    return XBOX360;
};

export const select360ById = (id) => {
    return XBOX360.find((games) => games.id === parseInt(id));
};