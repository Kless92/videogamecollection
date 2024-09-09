import { useParams } from "react-router-dom";
import { selectNESById } from "../nes/nesSlice";
import Discription from "../../Display/Discription";

const NesDiscription = () => {
    const { gameId } = useParams();
    const items = selectNESById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NesDiscription;