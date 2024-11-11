import { Container } from "reactstrap";
import N64List from "../../features/Nintendo/n64/N64List";
import n64 from "../../app/assets/images/Nintendo/n64/n64.jpg"

const N64Page = () => {
    return (
        <div style={{backgroundImage: `url(${n64})`}}>
            <Container>
                <h1>Nintendo 64 Collection</h1>
                <N64List/>
            </Container>
        </div>
    )
};

export default N64Page;