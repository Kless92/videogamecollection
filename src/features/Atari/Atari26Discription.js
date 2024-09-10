import { useParams } from "react-router-dom";
import { selectAtari26ById } from "./atari26Slice";
import Discription from "../Display/Discription";

const NesDiscription = () => {
    const { gameId } = useParams();
    const items = selectAtari26ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NesDiscription;