import { XBOX } from "../../../app/shared/ORIGINALXBOX"

export const selectAll = () => {
    return XBOX;
};

export const selectXboxById = (id) => {
    return XBOX.find((games) => games.id === parseInt(id));
};