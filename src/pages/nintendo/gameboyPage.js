import { Container } from "reactstrap";
import GameboyList from "../../features/Nintendo/gameboy/GameboyList";
import gameBoy from "../../app/assets/images/Nintendo/gameboy/gameboy.jpg"
import gameBoyImage from "../../app/assets/images/Nintendo/Game_Boy_Logo.svg.png";

const GameboyPage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoy})`}}>
            <img className="test" src={gameBoyImage} alt={'File Missing'} 
            style={{marginTop:'25px', marginBottom:'20px', width:'55%', padding:"10px"}}/>
            <Container>
                <GameboyList />
            </Container>
        </div>
    )
};

export default GameboyPage;