import icons from '@/constants/icons';
import images from '@/constants/images';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = () => {
  // Add a function to handle login
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        {/* A grid of home images as hero */}
        <Image
          source={images.onboarding as ImageSourcePropType}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        {/* Welcoming messages */}
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Real Scout
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 flex flex-row items-center justify-center"
          >
            <Image
              source={icons.google as ImageSourcePropType}
              className="w-5 h-5"
              resizeMode="contain"
            />
            {/* Sign in button */}
            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
