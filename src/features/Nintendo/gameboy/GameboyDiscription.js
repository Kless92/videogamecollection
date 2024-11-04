import { useParams } from "react-router-dom";
import { selectGameBoyById } from "./GameboySlice";
import Discription from "../../Display/Discription";

const GameboyDiscription = () => {
    const { gameId } = useParams();
    const items = selectGameBoyById(gameId);
    return (
        <Discription items={items} />
    );
};

export default GameboyDiscription;