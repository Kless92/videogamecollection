import { useParams } from "react-router-dom";
import { selectN64ById } from "./n64Slice";
import Discription from "../../Display/Discription";

const N64Discription = () => {
    const { gameId } = useParams();
    const items = selectN64ById(gameId);
    return (
        <Discription items={items} />
    );
};

export default N64Discription;