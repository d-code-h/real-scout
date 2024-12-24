import { ImageSourcePropType } from 'react-native';

export interface CardProps {
  _id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  category: string;
  image: ImageSourcePropType;
}
