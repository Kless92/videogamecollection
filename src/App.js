import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import NesPage from './pages/nintendo/nesPage';
import NesDiscription from './features/Nintendo/nes/NesDiscription';
import SnesPage from './pages/nintendo/snesPage';
import SnesDiscription from './features/Nintendo/snes/SnesDiscription';
import N64Page from './pages/nintendo/n64Page';
import N64Discription from './features/Nintendo/n64/N64Discription';
import GamecubePage from './pages/nintendo/gamecubePage';
import GamecubeDiscription from './features/Nintendo/gamecube/GamecubeDiscription';
import WiiPage from './pages/nintendo/wiiPage';
import WiiDiscription from './features/Nintendo/wii/WiiDiscription';
import WiiUPage from './pages/nintendo/wiiUPage';
import WiiUDiscription from './features/Nintendo/wiiU/WiiUDiscription';
import SwitchPage from './pages/nintendo/switchPage';
import SwitchDiscription from './features/Nintendo/switch/SwitchDiscription';
import GameboyPage from './pages/nintendo/gameboyPage';
import GameboyDiscription from './features/Nintendo/gameboy/GameboyDiscription';
import GameboycolorPage from './pages/nintendo/gameboycolorPage';
import GameboycolorDiscrition from './features/Nintendo/gameboycolor/GameboycolorDiscription';
import GameboyadvancePage from './pages/nintendo/gameboyadvancePage';
import GameboyAdvanceDiscription from './features/Nintendo/gameboyadvence/GameboyadvanceDiscription';
import NintendodsPage from './pages/nintendo/nintendodsPage';
import NintendodsDiscription from './features/Nintendo/nintendods/NintendodsDiscription';
import Nintendo3dsPage from './pages/nintendo/nintendo3dsPage';
import Nintendo3dsDiscription from './features/Nintendo/nintendo3ds/Nintendo3dsDiscription';
import Atari2600Page from './pages/atari/atari2600Page';
import Atari26Discription from './features/Atari/Atari26Discription';
import GenesisPage from './pages/sega/genesisPage';
import GenesisDiscription from './features/Sega/genesis/GenesisDiscription';
import DreamCastPage from './pages/sega/dreamcastPage';
import DreamcastDiscription from './features/Sega/dreamcast/DreamcastDiscription';
import PS1Page from './pages/sony/ps1Page';
import Ps1Discription from './features/Sony/ps1/Ps1Discription';
import PS2Page from './pages/sony/ps2Page';
import Ps2Discription from './features/Sony/ps2/Ps2Discription';
import PS3Page from './pages/sony/ps3Page';
import Ps3Discription from './features/Sony/ps3/Ps3Discription';
import PS4Page from './pages/sony/ps4Page';
import Ps4Discription from './features/Sony/ps4/Ps4Discription';
import PS5Page from './pages/sony/ps5Page';
import Ps5Discription from './features/Sony/ps5/Ps5Discription';
import PSPPage from './pages/sony/pspPage';
import PspDiscription from './features/Sony/psp/PspDiscription';
import XboxPage from './pages/microsoft/xboxPage';
import OriginalXboxDiscription from './features/Microsoft/originalXbox/OriginalXboxDiscription';
import Xbox360Page from './pages/microsoft/xbox360Page';
import Xbox360Discription from './features/Microsoft/xbox360/Xbox360Discription';
import CdromPage from './pages/Mis/cdromPage';
import CdromDiscription from './features/Mis/CdromDiscription';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='nes' element={<NesPage />} />
        <Route path='nes/:gameId' element={<NesDiscription/>} />
        <Route path='snes' element={<SnesPage />} />
        <Route path='snes/:gameId' element={<SnesDiscription/>} />
        <Route path='n64' element={<N64Page />} />
        <Route path='n64/:gameId' element={<N64Discription/>}/>
        <Route path='gamecube' element={<GamecubePage />} />
        <Route path='gamecube/:gameId' element={<GamecubeDiscription/>}/>
        <Route path='wii' element={<WiiPage />} />
        <Route path='wii/:gameId' element={<WiiDiscription/>}/>
        <Route path='wiiu' element={<WiiUPage />} />
        <Route path='wiiu/:gameId' element={<WiiUDiscription/>}/>
        <Route path='switch' element={<SwitchPage />} />
        <Route path='switch/:gameId' element={<SwitchDiscription/>}/>
        <Route path='gameboy' element={<GameboyPage/>}/>
        <Route path='gameboy/:gameId' element={<GameboyDiscription/>}/>
        <Route path='gameboycolor' element={<GameboycolorPage/>}/>
        <Route path='gameboycolor/:gameId' element={<GameboycolorDiscrition/>}/>
        <Route path='gameboyadvance' element={<GameboyadvancePage/>}/>
        <Route path='gameboyadvance/:gameId' element={<GameboyAdvanceDiscription/>}/>
        <Route path='nintendods' element={<NintendodsPage/>}/>
        <Route path='nintendods/:gameId' element={<NintendodsDiscription/>}/>
        <Route path='nintendo3ds' element={<Nintendo3dsPage/>}/>
        <Route path='nintendo3ds/:gameId' element={<Nintendo3dsDiscription/>}/>
        <Route path='atari2600' element={<Atari2600Page />} />
        <Route path='atari2600/:gameId' element={<Atari26Discription/>}/>
        <Route path='gensis' element={<GenesisPage />} />
        <Route path='gensis/:gameId' element={<GenesisDiscription/>}/>
        <Route path='dreamcast' element={<DreamCastPage />} />
        <Route path='dreamcast/:gameId' element={<DreamcastDiscription/>}/>
        <Route path='ps1' element={<PS1Page />} />
        <Route path='ps1/:gameId' element={<Ps1Discription/>}/>
        <Route path='ps2' element={<PS2Page />} />
        <Route path='ps2/:gameId' element={<Ps2Discription/>}/>
        <Route path='ps3' element={<PS3Page />} />
        <Route path='ps3/:gameId' element={<Ps3Discription/>}/>
        <Route path='ps4' element={<PS4Page />} />
        <Route path='ps4/:gameId' element={<Ps4Discription/>}/>
        <Route path='ps5' element={<PS5Page />} />
        <Route path='ps5/:gameId' element={<Ps5Discription/>}/>
        <Route path='psp' element={<PSPPage/>}/>
        <Route path='psp/:gameId' element={<PspDiscription/>}/>
        <Route path='xbox' element={<XboxPage />} />
        <Route path='xbox/:gameId' element={<OriginalXboxDiscription/>}/>
        <Route path='xbox360' element={<Xbox360Page />} />
        <Route path='xbox360/:gameId' element={<Xbox360Discription/>}/>
        <Route path='cdrom' element={<CdromPage />} />
        <Route path='cdrom/:gameId' element={<CdromDiscription/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
