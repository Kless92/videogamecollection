import { useParams } from "react-router-dom";
import { selectNintendoAccessoriesById } from "./NintendoAccessoriesSlices";
import Discription from "../../Display/Discription";

const NintendoAccessoriesDiscription = () => {
    const { gameId } = useParams();
    const items = selectNintendoAccessoriesById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NintendoAccessoriesDiscription;