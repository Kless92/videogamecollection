import { Container } from "reactstrap";
import CdromList from "../../features/Mis/CdromList";
const CdromPage = () => {
    return (
        <Container>
            <h1>PC Games on CDROM Collection</h1>
            <CdromList/>
        </Container>
    )
}

export default CdromPage;