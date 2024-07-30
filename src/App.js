import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import NesPage from './pages/nesPage';
import SnesPage from './pages/snesPage';
import N64Page from './pages/n64Page';
import GamecubePage from './pages/gamecubePage';
import WiiPage from './pages/wiiPage';
import WiiUPage from'./pages/wiiUPage';
import SwitchPage from'./pages/switchPage';
import Atari2600Page from'./pages/atari2600Page';
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
      </Routes>
    </div>
  );
}

export default App;
