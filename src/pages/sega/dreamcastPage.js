import { Container } from "reactstrap";
import DreamcastList from "../../features/Sega/dreamcast/DreamcastList";
const DreamCastPage = () => {
    return (
        <Container>
            <h1>Sega DreamCast Collection</h1>
            <DreamcastList/>
        </Container>
    )
};

export default DreamCastPage;