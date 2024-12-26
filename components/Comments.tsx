import { View, Text, Image } from 'react-native';

import icons from '@/constants/icons';
import { Models } from 'react-native-appwrite';

const Comments = ({ items }: { items: Models.Document[] }) => {
  return (
    <View>
      {/*Render each review */}
      {items.map((item) => (
        <View
          key={item.$id}
          className="flex flex-col items-start border-b border-gray-100 pb-3 mb-3"
        >
          <View className="flex flex-row items-center">
            {/* Reviewer image */}
            <Image
              source={{ uri: item.avatar }}
              className="size-14 rounded-full"
            />
            {/* Reviewer name */}
            <Text className="text-base text-black-300 text-start font-rubik-bold ml-3">
              {item.name}
            </Text>
          </View>

          {/* Review message */}
          <Text className="text-black-200 text-base font-rubik mt-2">
            {item.review}
          </Text>

          {/* Review base showing the number of likes and date of review */}
          <View className="flex flex-row items-center w-full justify-between mt-4">
            <View className="flex flex-row items-center">
              {/* Like icon */}
              <Image
                source={icons.heart}
                className="size-5"
                tintColor={'#0061FF'}
              />
              {/* Like number */}
              <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                120
              </Text>
            </View>

            {/* Review date */}
            <Text className="text-black-100 text-sm font-rubik">
              {new Date(item.$createdAt).toDateString()}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Comments;
