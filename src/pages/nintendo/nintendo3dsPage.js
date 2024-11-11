import { Container } from "reactstrap";
import Nintendo3dsList from "../../features/Nintendo/nintendo3ds/Nintendo3dsList";
import threeDS from "../../app/assets/images/Nintendo/3ds/3ds.jpg"

const Nintendo3dsPage = () => {
    return (
        <div style={{backgroundImage: `url(${threeDS})`}}>
            <Container>
                <h1>Nintendo 3DS Collection</h1>
                <Nintendo3dsList/>
            </Container>
        </div>
    )
};

export default Nintendo3dsPage;