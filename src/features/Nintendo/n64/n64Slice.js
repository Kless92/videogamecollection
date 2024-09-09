import { N64 } from "../../../app/shared/N64GAMES"

export const selectAll = () => {
    return N64;
};

export const selectN64ById = (id) => {
    return N64.find((games) => games.id === parseInt(id));
};