import { NINTENDO3DS } from "../../../app/shared/NINTENDO3DSGAMES";

export const selectAll = () => {
    return NINTENDO3DS;
};

export const selectNintendo3DSById = (id) => {
    return NINTENDO3DS.find((games) => games.id === parseInt(id));
};