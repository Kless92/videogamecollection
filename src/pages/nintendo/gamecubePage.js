import { Container } from "reactstrap";
import GamecubeList from "../../features/Nintendo/gamecube/GamecubeList";
import gc from "../../app/assets/images/Nintendo/gamecube/gamecube.jpg"

const gamecubePage = () => {
    return (
        <Container style={{backgroundImage: `url(${gc})`}}> 
            <h1>Nintendo GameCube Collection</h1>
            <GamecubeList/>
        </Container>
    )
};

export default gamecubePage;