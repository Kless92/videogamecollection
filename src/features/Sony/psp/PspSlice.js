import { PLAYSTATIONPORTABLE } from "../../../app/shared/PLAYSTATIONPORTABLEGAMES"

export const selectAll = () => {
    return PLAYSTATIONPORTABLE;
};

export const selectPspById = (id) => {
    return PLAYSTATIONPORTABLE.find((games) => games.id === parseInt(id));
};