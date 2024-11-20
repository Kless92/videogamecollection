import { Container } from "reactstrap";
import GameboycolorList from "../../features/Nintendo/gameboycolor/GameboycolorList";
import gameBoyColor from "../../app/assets/images/Nintendo/gameboycolor/gameboycolor.jpg"
import gameBoyColorImage from "../../app/assets/images/Nintendo/Game_Boy_Color_logo.svg.png";

const GameboycolorPage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoyColor})`}}>
            <img className="test" src={gameBoyColorImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'35%', padding:"10px"}}/>
            <Container>
                <GameboycolorList />
            </Container>
        </div>
    )
};

export default GameboycolorPage;