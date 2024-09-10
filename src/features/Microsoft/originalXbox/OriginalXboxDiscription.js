import { useParams } from "react-router-dom";
import { selectXboxById } from "./originalXboxSlice";
import Discription from "../../Display/Discription";

const OriginalXboxDiscription = () => {
    const { gameId } = useParams();
    const items = selectXboxById(gameId);
    return (
        <Discription items={items} />
    );
};

export default OriginalXboxDiscription;