import { useParams } from "react-router-dom";
import { selectPs1ById } from "./ps1Slice";
import Discription from "../../Display/Discription";

const Ps1Discription = () => {
    const { gameId } = useParams();
    const items = selectPs1ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Ps1Discription;