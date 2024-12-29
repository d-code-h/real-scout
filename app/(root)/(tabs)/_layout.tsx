import { tabs } from '@/constants/data';
import { TabIconProps } from '@/types';
import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';

const TabIcon = ({ focused, icon, title }: TabIconProps) => (
  // Render Tab with an icon and tab title
  <View className="flex-2 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? '#8B5DFF' : '#666876'}
      resizeMode="contain"
      className="size-6"
    />

    <Text
      className={`${
        focused
          ? 'text-primary-300 font-rubik-medium'
          : 'text-black-200 font-rubik'
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#8B5DFF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {/* Render  each tab */}
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} title={tab.title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
