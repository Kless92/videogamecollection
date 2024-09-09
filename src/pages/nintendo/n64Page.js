import { Container } from "reactstrap";
import N64List from "../../features/Nintendo/n64/N64List";

const N64Page = () => {
    return (
        <Container>
            <h1>Nintendo 64 Collection</h1>
            <N64List/>
        </Container>
    )
};

export default N64Page;