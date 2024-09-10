import { useParams } from "react-router-dom";
import { selectWiiUById } from "./wiiUSlice";
import Discription from "../../Display/Discription";

const WiiUDiscription = () => {
    const { gameId } = useParams();
    const items = selectWiiUById(gameId);
    return (
        <Discription items={items} />
    );
};

export default WiiUDiscription;