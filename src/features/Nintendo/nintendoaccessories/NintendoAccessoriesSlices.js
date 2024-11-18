import { NINTENDOACCESSORIES } from "../../../app/shared/NINTENDOACCESSORIES"

export const selectAll = () => {
    return NINTENDOACCESSORIES;
};

export const selectNintendoAccessoriesById = (id) => {
    return NINTENDOACCESSORIES.find((games) => games.id == parseInt(id));
};