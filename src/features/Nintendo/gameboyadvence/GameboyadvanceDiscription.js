import { useParams } from "react-router-dom";
import { selectGameBoyAdvanceById } from "./GameboyadvanceSlice";
import Discription from "../../Display/Discription";

const GameboyAdvanceDiscription = () => {
    const { gameId } = useParams();
    const items = selectGameBoyAdvanceById(gameId);
    return (
        <Discription items={items} />
    );
};

export default GameboyAdvanceDiscription;