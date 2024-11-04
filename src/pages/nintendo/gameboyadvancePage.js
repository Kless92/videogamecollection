import { Container } from "reactstrap";
import GameboyadvanceList from '../../features/Nintendo/gameboyadvence/GameboyadvanceList'
const GameboyadvancePage = () => {
    return (
        <Container>
            <h1>Nintendo GameBoyAdvance Collection</h1>
            <GameboyadvanceList/>
        </Container>
    )
}

export default GameboyadvancePage;