import { Container } from "reactstrap";
import GameboycolorList from "../../features/Nintendo/gameboycolor/GameboycolorList";
import gameBoyColor from "../../app/assets/images/Nintendo/gameboycolor/gameboycolor.jpg"

const GameboycolorPage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoyColor})`}}>
            <Container>
                <h1>Nintendo GameBoyColor Collection</h1>
                <GameboycolorList />
            </Container>
        </div>
    )
};

export default GameboycolorPage;