import { NINTENDODS } from "../../../app/shared/NINTENDODSGAMES";

export const selectAll = () => {
    return NINTENDODS;
};

export const selectNintendoDSById = (id) => {
    return NINTENDODS.find((games) => games.id === parseInt(id));
};