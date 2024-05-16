import { ICharacter } from './types';

export const CHARACTERS: ICharacter[] = [
  {
    name: 'Lilith',
    image: require('../assets/characters/candy_sweetteam_lilith-removebg.png'),
    type: 'CANDY',
    typeDec: 'sweet team',
    bgColor: '#3CCBDF',
  },
  {
    name: 'Steven',
    image: require('../assets/characters/fight_streetwarrior_steven-removebg.png'),
    type: 'FIGHT',
    typeDec: 'street warrior',
    bgColor: '#212529',
  },
  {
    name: 'Jeremy',
    image: require('../assets/characters/funk_funnystyle_jeremy-removebg.png'),
    type: 'FUNK',
    typeDec: 'funny style',
    bgColor: '#054DFF',
  },
  {
    name: 'Bruno',
    image: require('../assets/characters/street_underhood_bruno-removebg.png'),
    type: 'STREET',
    typeDec: 'underhood',
    bgColor: '#FF3622',
  },
  {
    name: 'Oscar',
    image: require('../assets/characters/tech_musicdown_oscar-removebg.png'),
    type: 'TECH',
    typeDec: 'music down',
    bgColor: '#FF5816',
  },
];
