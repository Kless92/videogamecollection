import { useParams } from "react-router-dom";
import { selectSNESById } from "../snes/snesSlice";
import Discription from "../../Display/Discription";

const NesDiscription = () => {
    const { gameId } = useParams();
    const items = selectSNESById(gameId);
    return (
        <Discription items={items} />
    );
};

export default NesDiscription;