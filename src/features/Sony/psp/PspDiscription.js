import { useParams } from "react-router-dom";
import { selectPspById } from "./PspSlice";
import Discription from "../../Display/Discription";

const PspDiscription = () => {
    const { gameId } = useParams();
    const items = selectPspById(gameId);
    return (
        <Discription items={items} />
    );
};

export default PspDiscription;