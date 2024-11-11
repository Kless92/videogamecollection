import { Container } from "reactstrap";
import GameboyList from "../../features/Nintendo/gameboy/GameboyList";
import gameBoy from "../../app/assets/images/Nintendo/gameboy/gameboy.jpg"

const GameboyPage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoy})`}}>
            <Container>
                <h1>Nintendo GameBoy Collection</h1>
                <GameboyList />
            </Container>
        </div>
    )
};

export default GameboyPage;