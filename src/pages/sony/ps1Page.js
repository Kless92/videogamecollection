import { Container } from "reactstrap";
import Ps1List from "../../features/Sony/ps1/Ps1List";
import ps1 from "../../app/assets/images/Sony/ps1/ps1.jpg";

const PS1Page = () => {
    return (
        <div style={{backgroundImage: `url(${ps1})`}}>
            <Container>
                <h1>Play Station 1 Collection</h1>
                <Ps1List/>
            </Container>
        </div>
    )
};

export default PS1Page;