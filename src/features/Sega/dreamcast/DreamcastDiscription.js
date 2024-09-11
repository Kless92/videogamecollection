import { useParams } from "react-router-dom";
import { selectDreamcastById } from "./dreamcastSlices";
import Discription from "../../Display/Discription";

const DreamcastDiscription = () => {
    const { gameId } = useParams();
    const items = selectDreamcastById(gameId);
    return (
        <Discription items={items} />
    );
};

export default DreamcastDiscription;