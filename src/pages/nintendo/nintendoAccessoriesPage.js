import { Container } from "reactstrap";
import NintendoAccessoriesList from "../../features/Nintendo/nintendoaccessories/NintendoAccessoriesList"
import threeDS from "../../app/assets/images/Nintendo/3ds/3ds.jpg"

const NintendoAccessoreisPage = () => {
    return (
        <div style={{backgroundImage: `url(${threeDS})`}}>
            <Container>
                <h1>Nintendo Accessories  Collection</h1>
                <NintendoAccessoriesList/>
            </Container>
        </div>
    )
};

export default NintendoAccessoreisPage;