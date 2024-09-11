import { GENESIS } from "../../../app/shared/GENESISGAMES"

export const selectAll = () => {
    return GENESIS;
};

export const selectGenesisById = (id) => {
    return GENESIS.find((games) => games.id == parseInt(id));
};