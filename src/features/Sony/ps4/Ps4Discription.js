import { useParams } from "react-router-dom";
import { selectPs4ById } from "./ps4Slice";
import Discription from "../../Display/Discription";

const Ps4Discription = () => {
    const { gameId } = useParams();
    const items = selectPs4ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Ps4Discription;