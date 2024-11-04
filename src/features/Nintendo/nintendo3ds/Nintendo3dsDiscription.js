import { useParams } from "react-router-dom";
import { selectNintendo3DSById } from "./Nintendo3dsSlices";
import Discription from "../../Display/Discription";

const Nintendo3dsDiscription = () => {
    const { gameId } = useParams();
    const items = selectNintendo3DSById(gameId);
    return (
        <Discription items={items} />
    );
};

export default Nintendo3dsDiscription;