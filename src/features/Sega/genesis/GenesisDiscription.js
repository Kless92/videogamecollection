import { useParams } from "react-router-dom";
import { selectGenesisById } from "./genesisSlice";
import Discription from "../../Display/Discription";

const GenesisDiscription = () => {
    const { gameId } = useParams();
    const items = selectGenesisById(gameId);
    return (
        <Discription items={items} />
    );
};

export default GenesisDiscription;