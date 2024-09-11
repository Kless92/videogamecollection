import { PLAYSTATION } from "../../../app/shared/PLAYSTATIONGAMES"

export const selectAll = () => {
    return PLAYSTATION;
};

export const selectPs1ById = (id) => {
    return PLAYSTATION.find((games) => games.id === parseInt(id));
};