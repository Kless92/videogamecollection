import { useParams } from "react-router-dom";
import { selectPs2ById } from "./ps2Slice";
import Discription from "../../Display/Discription";

const Ps2Discription = () => {
    const { gameId } = useParams();
    const items = selectPs2ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Ps2Discription;