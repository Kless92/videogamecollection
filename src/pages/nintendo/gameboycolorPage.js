import { Container } from "reactstrap";
import GameboycolorList from "../../features/Nintendo/gameboycolor/GameboycolorList";

const GameboycolorPage = () => {
    return (
        <Container>
            <h1>Nintendo GameBoyColor Collection</h1>
            <GameboycolorList />
        </Container>
    )
};

export default GameboycolorPage;