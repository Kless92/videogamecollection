import { Container } from "reactstrap";
import GameboyList from "../../features/Nintendo/gameboy/GameboyList";

const GameboyPage = () => {
    return (
        <Container>
            <h1>Nintendo GameBoy Collection</h1>
            <GameboyList />
        </Container>
    )
};

export default GameboyPage;