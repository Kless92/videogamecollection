import { useParams } from "react-router-dom";
import { selectWiiById } from "./wiiSlice";
import Discription from "../../Display/Discription";

const NesDiscription = () => {
    const { gameId } = useParams();
    const items = selectWiiById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NesDiscription;