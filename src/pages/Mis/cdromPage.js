import { Container } from "reactstrap";
import CdromList from "../../features/Mis/CdromList";
import cdRom from "../../app/assets/images/CDROM/cdRom.png";

const CdromPage = () => {
    return (
        <div style={{backgroundImage: `url(${cdRom})`}}>
            <Container>
                <h1>PC Games on CDROM Collection</h1>
                <CdromList/>
            </Container>
        </div>
    )
}

export default CdromPage;