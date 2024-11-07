import { useParams } from "react-router-dom";
import { selectCdromById } from "./cdromSlice";
import Discription from "../Display/Discription";

const CdromDiscription = () => {
    const { gameId } = useParams();
    const items = selectCdromById(gameId);
    return (
        <Discription items={items} />
    );
};

export default CdromDiscription;