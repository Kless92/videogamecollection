import { useParams } from "react-router-dom";
import { selectGameBoyColorById } from "./GameboycolorSlice";
import Discription from "../../Display/Discription";

const GameboycolorDiscription = () => {
    const { gameId } = useParams();
    const items = selectGameBoyColorById(gameId)
    return (
        <Discription items={items} />
    );
};

export default GameboycolorDiscription;