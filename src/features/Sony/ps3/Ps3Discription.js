import { useParams } from "react-router-dom";
import { selectPs3ById } from "./ps3Slice";
import Discription from "../../Display/Discription";

const Ps3Discription = () => {
    const { gameId } = useParams();
    const items = selectPs3ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Ps3Discription;