import nintendoLogo from "../assets/images/Microsoft/xbox360/Xbox360.png";
import diableBattleChest from "../assets/images/CDROM/win_diable_battlechest.jpg"
import lordOfTheRingFellowshipOfTheRing from "../assets/images/CDROM/win_lordoftheringsthefellowshipofthering.jpg"
import starcraftBattleChest from "../assets/images/CDROM/win_starcraft_battlechest.jpg"
import worldOfWarcraft from "../assets/images/CDROM/win_worldofwarcraft.jpg"
import worldOfWarcraftTBC from "../assets/images/CDROM/win_worldofwarcraftburningcrusade.jpg"
import worldOfWarcraftWOTLK from "../assets/images/CDROM/win_worldofwarcraftwrathofthelichking.jpg"
import worldOfWarcraftCata from "../assets/images/CDROM/win_worldofwarcarftcataclysm.jpg"

export const CDROM = [
    {
        id: 0,
        name: 'Diablo: Battle Chest',
        image: diableBattleChest,
        genre: 'Action Role-Playing Game',
        discription: 'Contains Diable, Diable II and Diable II: Lord of Destruction'
    },
    {
        id: 1,
        name: 'Lord of the Ring: The Fellowship of the Ring',
        image: lordOfTheRingFellowshipOfTheRing,
        genre: 'Action-Adventure',
        discription: 'The first book of Lord of the Ring is transformed into a video game with some liberties.'
    },
    {
        id: 2,
        name: 'StarCraft Battle Chest',
        image: starcraftBattleChest,
        genre: 'Real-Tiem Strategy',
        discription: 'Contains StarCraft and StarCraft: Brood War'      
    },
    {
        id: 3,
        name: 'World of Warcraft',
        image: worldOfWarcraft,
        genre: 'Massively Multiplayer Online',
        discription: 'Blizzard massive open world, base on the Warcraft games, where two warring factions fight for Azeroth.'        
    },
    {
        id: 4,
        name: 'World of Warcraft: The Burning Crusade',
        image: worldOfWarcraftTBC,
        genre: 'Massively Multiplayer Online',
        discription: 'The Dark Portal has open and adventurers travel to Outland.'        
    },
    {
        id: 5,
        name: 'World of Warcraft: The Wrath of the Litch King',
        image: worldOfWarcraftWOTLK,
        genre: 'Massively Multiplayer Online',
        discription: 'Adventurers travle to Northland to fight aginst the Litch King.'        
    },
    {
        id: 6,
        name: 'World of Warcraft: Cataclysm',
        image: worldOfWarcraftCata,
        genre: 'Massively Multiplayer Online',
        discription: 'Azeroth has changed forever as Deathwing returns and scared the world.'      
    }
]