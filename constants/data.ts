import { CardProps } from '@/types/index';
import icons from './icons';
import images from './images';

export const cards = [
  {
    _id: '1',
    title: 'Card 1',
    location: 'Location 1',
    price: '100',
    rating: 4.8,
    category: 'house',
    image: images.newYork,
  },
  {
    _id: '2',
    title: 'Card 2',
    location: 'Location 2',
    price: '200',
    rating: 3,
    category: 'house',
    image: images.japan,
  },
  {
    _id: '3',
    title: 'Card 3',
    location: 'Location 3',
    price: '300',
    rating: 2,
    category: 'flat',
    image: images.newYork,
  },
  {
    _id: '4',
    title: 'Card 4',
    location: 'Location 4',
    price: '400',
    rating: 5,
    category: 'villa',
    image: images.japan,
  },
];

export const featuredCards: CardProps[] = [
  {
    _id: '1',
    title: 'Featured 1',
    location: 'Location 1',
    price: '100',
    rating: 4.8,
    image: images.newYork,
    category: 'house',
  },
  {
    _id: '2',
    title: 'Featured 2',
    location: 'Location 2',
    price: '200',
    rating: 3,
    image: images.japan,
    category: 'flat',
  },
];

export const categories = [
  { title: 'All', category: 'All' },
  { title: 'Houses', category: 'House' },
  { title: 'Condos', category: 'Condos' },
  { title: 'Duplexes', category: 'Duplexes' },
  { title: 'Studios', category: 'Studios' },
  { title: 'Villas', category: 'Villa' },
  { title: 'Apartments', category: 'Apartments' },
  { title: 'Townhomes', category: 'Townhomes' },
  { title: 'Others', category: 'Others' },
];

export const settings = [
  {
    title: 'My Bookings',
    icon: icons.calendar,
  },
  {
    title: 'Payments',
    icon: icons.wallet,
  },
  {
    title: 'Profile',
    icon: icons.person,
  },
  {
    title: 'Notifications',
    icon: icons.bell,
  },
  {
    title: 'Security',
    icon: icons.shield,
  },
  {
    title: 'Language',
    icon: icons.language,
  },
  {
    title: 'Help Center',
    icon: icons.info,
  },
  {
    title: 'Invite Friends',
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: 'Laundry',
    icon: icons.laundry,
  },
  {
    title: 'Car Parking',
    icon: icons.carPark,
  },
  {
    title: 'Sports Center',
    icon: icons.run,
  },
  {
    title: 'Cutlery',
    icon: icons.cutlery,
  },
  {
    title: 'Gym',
    icon: icons.dumbell,
  },
  {
    title: 'Swimming pool',
    icon: icons.swim,
  },
  {
    title: 'Wifi',
    icon: icons.wifi,
  },
  {
    title: 'Pet Center',
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];