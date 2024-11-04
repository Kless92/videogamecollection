import drMario from "../assets/images/Nintendo/gameboy/gb_drmario.jpg"
import kirbysDreamLand from "../assets/images/Nintendo/gameboy/gb_kirbysdreamland.jpg"
import pokemonBlue from "../assets/images/Nintendo/gameboy/gb_pokemonblue.jpg"
import pokemonRed from "../assets/images/Nintendo/gameboy/gb_pokemonred.jpg"
import superMarioLand from "../assets/images/Nintendo/gameboy/gb_supermarioland.jpg"
import tetris from "../assets/images/Nintendo/gameboy/gb_tetris_2.jpg"

export const GAMEBOY = [
    {
        id: 0,
        name: 'Dr. Mario',
        image: drMario,
        genre: 'Puzzle',
        discription: 'Kill some viruses in this port for Gameboy.'
    },
    {
        id: 1,
        name: 'Kirbys Dream Land',
        image: kirbysDreamLand,
        genre: 'Action-Platformer',
        discription: 'Kirby\'s first adventure to take back the stolen food from King Dedede.'
    },
    {
        id: 2,
        name: 'Pokemon Red',
        image: pokemonRed,
        genre: 'Role-Playing Game',
        discription: 'The first generation of Pokemon, collect all 151 in the Kanto region.'      
    },
    {
        id: 3,
        name: 'Pokemon Blue',
        image: pokemonBlue,
        genre: 'Role-Playing Game',
        discription: 'The first generation of Pokemon, collect all 151 in the Kanto region.'        
    },
    {
        id: 4,
        name: 'Super Mario Land',
        image: superMarioLand,
        genre: 'platformer',
        discription: 'Mario travles to Sarasaland to save Princess Daisy in this Gameboy excusive.'        
    },
    {
        id: 5,
        name: 'Tetris',
        image: tetris,
        genre: 'Puzzle',
        discription: 'Fit all the piece and reach a high score at home or on the go.'        
    }
]