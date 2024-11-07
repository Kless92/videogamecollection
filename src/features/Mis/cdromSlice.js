import { CDROM } from '../../app/shared/CDROMGAMES'

export const selectAll = () => {
    return CDROM;
};

export const selectCdromById = (id) => {
    return CDROM.find((games) => games.id === parseInt(id));
};