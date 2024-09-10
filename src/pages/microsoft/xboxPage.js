import { Container } from "reactstrap";
import OriginalXboxList from "../../features/Microsoft/originalXbox/OriginalXboxList";
const XboxPage = () => {
    return (
        <Container>
            <h1>Original Xbox Collection</h1>
            <OriginalXboxList/>
        </Container>
    )
};

export default XboxPage;