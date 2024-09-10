import { useParams } from "react-router-dom";
import { selectSwitchById } from "./switchSlice";
import Discription from "../../Display/Discription";

const SwitchDiscription = () => {
    const { gameId } = useParams();
    const items = selectSwitchById(gameId);
    return (
        <Discription items={items} />
    );
};

export default SwitchDiscription;