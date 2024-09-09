import { Container } from "reactstrap";
import GamecubeList from "../../features/Nintendo/gamecube/GamecubeList";

const gamecubePage = () => {
    return (
        <Container>
            <h1>Nintendo GameCube Collection</h1>
            <GamecubeList/>
        </Container>
    )
};

export default gamecubePage;