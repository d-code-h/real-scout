import icons from '@/constants/icons';
import images from '@/constants/images';
import { CardProps } from '@/types/index';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const FeaturedCard = ({
  item,
  onPress,
}: {
  item: CardProps;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image
        source={item.image as ImageSourcePropType}
        className="size-full rounded-2xl"
      />

      <Image
        source={images.cardGradient as ImageSourcePropType}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image
          source={icons.star as ImageSourcePropType}
          className="size-3.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          {/* {item.name} */}
          {item.title}
        </Text>
        <Text className="text-base font-rubik text-white" numberOfLines={1}>
          {item.location}
          {/* {item.address} */}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            ${item.price}
          </Text>
          <Image
            source={icons.heart as ImageSourcePropType}
            className="size-5"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({
  item,
  onPress,
}: {
  item: CardProps;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image
          source={icons.star as ImageSourcePropType}
          className="size-2.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {item.rating}
        </Text>
      </View>

      <Image
        source={item.image as ImageSourcePropType}
        className="w-full h-40 rounded-lg"
      />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          {item.title}
          {/* {item.name} */}
        </Text>
        <Text className="text-xs font-rubik text-black-100">
          {item.location}
          {/* {item.address} */}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${item.price}
          </Text>
          <Image
            source={icons.heart as ImageSourcePropType}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
