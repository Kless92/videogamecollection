import { useParams } from "react-router-dom";
import { selectPs5ById } from "./ps5Slice";
import Discription from "../../Display/Discription";

const Ps5Discription = () => {
    const { gameId } = useParams();
    const items = selectPs5ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Ps5Discription;