import { Container } from "reactstrap";
import GameboyadvanceList from '../../features/Nintendo/gameboyadvence/GameboyadvanceList'
import gameBoyAdvance from "../../app/assets/images/Nintendo/gameboyadvance/gameboyadvance.jpg"

const GameboyadvancePage = () => {
    return (
        <div style={{backgroundImage: `url(${gameBoyAdvance})`}}>
            <Container>
                <h1>Nintendo GameBoyAdvance Collection</h1>
                <GameboyadvanceList/>
            </Container>
        </div>
    )
}

export default GameboyadvancePage;