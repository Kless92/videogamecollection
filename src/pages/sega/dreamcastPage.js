import { Container } from "reactstrap";
import DreamcastList from "../../features/Sega/dreamcast/DreamcastList";
import dreamCast from "../../app/assets/images/Sega/dreamcast/dreamCast.png";

const DreamCastPage = () => {
    return (
        <div style={{backgroundImage: `url(${dreamCast})`}}>
            <Container>
                <h1>Sega DreamCast Collection</h1>
                <DreamcastList/>
            </Container>
        </div>
    )
};

export default DreamCastPage;