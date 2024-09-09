import { useParams } from "react-router-dom";
import { selectGamecubeById } from "../gamecube/gamecubeSlice";
import Discription from "../../Display/Discription";

const NesDiscription = () => {
    const { gameId } = useParams();
    const items = selectGamecubeById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NesDiscription;