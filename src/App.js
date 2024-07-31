import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import NesPage from './pages/nintendo/nesPage';
import SnesPage from './pages/nintendo/snesPage';
import N64Page from './pages/nintendo/n64Page';
import GamecubePage from './pages/nintendo/gamecubePage';
import WiiPage from './pages/nintendo/wiiPage';
import WiiUPage from'./pages/nintendo/wiiUPage';
import SwitchPage from'./pages/nintendo/switchPage';
import Atari2600Page from'./pages/atari/atari2600Page';
import GenesisPage from './pages/sega/genesisPage';
import DreamCastPage from './pages/sega/dreamcastPage';
import PS1Page from './pages/sony/ps1Page';
import PS2Page from './pages/sony/ps2Page';
import PS3Page from './pages/sony/ps3Page';
import PS4Page from './pages/sony/ps4Page';
import PS5Page from './pages/sony/ps5Page';
import XboxPage from './pages/microsoft/xboxPage';
import Xbox360Page from './pages/microsoft/xbox360Page';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='nes' element={<NesPage/>}/>
        <Route path='snes' element={<SnesPage/>}/>
        <Route path='n64' element={<N64Page/>}/>
        <Route path='gamecube' element={<GamecubePage/>}/>
        <Route path='wii' element={<WiiPage/>}/>
        <Route path='wiiu' element={<WiiUPage/>}/>
        <Route path='switch' element={<SwitchPage/>}/>
        <Route path='atari2600' element={<Atari2600Page/>}/>
        <Route path='gensis' element={<GenesisPage/>}/>
        <Route path='dreamcast' element={<DreamCastPage/>}/>
        <Route path='ps1' element={<PS1Page/>}/>
        <Route path='ps2' element={<PS2Page/>}/>
        <Route path='ps3' element={<PS3Page/>}/>
        <Route path='ps4' element={<PS4Page/>}/>
        <Route path='ps5' element={<PS5Page/>}/>
        <Route path='xbox' element={<XboxPage/>}/>
        <Route path='xbox360' element={<Xbox360Page/>}/>
      </Routes>
    </div>
  );
}

export default App;
