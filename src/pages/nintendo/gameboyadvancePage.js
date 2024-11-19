import { Container, Row, Table, Col } from "reactstrap";
import GameboyadvanceList from '../../features/Nintendo/gameboyadvence/GameboyadvanceList'
import gameBoyAdvance from "../../app/assets/images/Nintendo/gameboyadvance/gameboyadvance.jpg"
import gameBoyAdvImage from "../../app/assets/images/Nintendo/Game_Boy_Advance_logo.svg.png";

const GameboyadvancePage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoyAdvance})`}}>
                <img className="test" src={gameBoyAdvImage} alt={'File Missing'} 
                style={{marginTop:'25px', marginBottom:'20px', width:'50%'}} />
            <Container>
                <GameboyadvanceList/>
            </Container>
        </div>
    )
}

export default GameboyadvancePage;