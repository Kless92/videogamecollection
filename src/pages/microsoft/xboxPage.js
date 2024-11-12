import { Container } from "reactstrap";
import OriginalXboxList from "../../features/Microsoft/originalXbox/OriginalXboxList";
import originalXbox from "../../app/assets/images/Microsoft/originalXbox/originalXbox.jpg";

const XboxPage = () => {
    return (
        <div style={{backgroundImage: `url(${originalXbox})`}}>
            <Container>
                <h1>Original Xbox Collection</h1>
                <OriginalXboxList/>
            </Container>
        </div>
    )
};

export default XboxPage;