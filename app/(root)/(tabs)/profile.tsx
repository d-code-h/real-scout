import { logout } from '@/app/lib/appwrite';
import { useGlobalContext } from '@/app/lib/global-provider';
import { settings } from '@/constants/data';
import icons from '@/constants/icons';
import { SettingsItemProps } from '@/types';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  // Button representing each settings
  <TouchableOpacity
    className="flex flex-row items-center justify-between py-3"
    onPress={onPress}
  >
    <View className="flex flex-row items-center gap-3">
      {/* Setting icon */}
      <Image className="size-6" source={icon} />
      {/* Setting title */}
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {/* Setting more detail icon */}
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  // Handle logout logic
  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert('Success', 'You have been logged out successfully');

      refetch();
    } else {
      Alert.alert('Error', 'An error occurred while logging out');
    }
  };
  return (
    <SafeAreaView className="h-full bg-white">
      {/* Ensure proper scrolling on small screen */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          {/* Notification icon */}
          <Image source={icons.bell} className="size-5" />
        </View>

        {/* User profile */}
        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            {/* User image */}
            <Image
              source={{
                uri: user?.avatar,
              }}
              className="size-44 relative rounded-full"
            />
            {/* Change user image button */}
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            {/* User name */}
            <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
          </View>
        </View>

        {/* Render Bookings and payments button */}
        <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        {/* Render settings starting from the third index */}
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        {/* Logout button */}
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
