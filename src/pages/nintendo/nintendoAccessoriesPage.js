import { Container } from "reactstrap";
import NintendoAccessoriesList from "../../features/Nintendo/nintendoaccessories/NintendoAccessoriesList"
import accessories from "../../app/assets/images/nintendoLogo.jpg"

const NintendoAccessoreisPage = () => {
    return (
        <div style={{backgroundImage: `url(${accessories})`}}>
            <Container>
                <h1 className="test" style={{marginTop:'25px', 
                    marginBottom:'20px', marginLeft:'25%', 
                    width:'50%', padding:"15px"}}>
                    Nintendo Accessories  Collection
                </h1>
                <NintendoAccessoriesList/>
            </Container>
        </div>
    )
};

export default NintendoAccessoreisPage;