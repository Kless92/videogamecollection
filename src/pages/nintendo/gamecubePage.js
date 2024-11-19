import { Container } from "reactstrap";
import GamecubeList from "../../features/Nintendo/gamecube/GamecubeList";
import gc from "../../app/assets/images/Nintendo/gamecube/gamecube.jpg"
import gameCubeImage from "../../app/assets/images/Nintendo/Gamecube_Logo.svg.png";

const gamecubePage = () => {
    return (
        <div style={{backgroundImage: `url(${gc})`}}>
            <img className="test" src={gameCubeImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'55%'}}/>
            <Container> 
                <GamecubeList/>
            </Container>
        </div>
    )
};

export default gamecubePage;