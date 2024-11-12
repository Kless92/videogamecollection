import { Container } from "reactstrap";
import Atari26List from "../../features/Atari/Atari26List";
import atari2600 from "../../app/assets/images/Atari/atari2600.png"

const Atari2600Page = () => {
    return (
        <div style={{backgroundImage: `url(${atari2600})`}}>
            <Container>
                <h1>Atari 2600 Collection</h1>
                <Atari26List/>
            </Container>
        </div>
    )
};

export default Atari2600Page;