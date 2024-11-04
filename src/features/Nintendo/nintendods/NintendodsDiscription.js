import { useParams } from "react-router-dom";
import { selectNintendoDSById } from "./NintendodsSlices";
import Discription from "../../Display/Discription";

const NintendodsDiscription = () => {
    const { gameId } = useParams();
    const items = selectNintendoDSById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NintendodsDiscription;