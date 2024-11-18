import { Container } from "reactstrap";
import NintendoAccessoriesList from "../../features/Nintendo/nintendoaccessories/NintendoAccessoriesList"
import accessories from "../../app/assets/images/nintendoLogo.png"

const NintendoAccessoreisPage = () => {
    return (
        <div style={{backgroundImage: `url(${accessories})`}}>
            <Container>
                <h1>Nintendo Accessories  Collection</h1>
                <NintendoAccessoriesList/>
            </Container>
        </div>
    )
};

export default NintendoAccessoreisPage;