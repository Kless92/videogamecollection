import { Container } from "reactstrap";
import Xbox360List from "../../features/Microsoft/xbox360/Xbox360List"
import xbox360 from "../../app/assets/images/Microsoft/xbox360/xbox360.jpg"

const Xbox360Page = () => {
    return (
        <div style={{backgroundImage: `url(${xbox360})`}}>
            <Container>
                <h1>Xbox 360 Collection</h1>
                <Xbox360List/>
            </Container>
        </div>
    )
};

export default Xbox360Page;