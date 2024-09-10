import { useParams } from "react-router-dom";
import { select360ById } from "./xbox360Slice";
import Discription from "../../Display/Discription";

const Xbox360Discription = () => {
    const { gameId } = useParams();
    const items = select360ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Xbox360Discription;