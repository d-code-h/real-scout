import { Card, FeaturedCard } from '@/components/Card';
import Filters from '@/components/Filters';
import NoResults from '@/components/NoResults';
import { cards, featuredCards } from '@/constants/data';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

const Home = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const [filteredCards, setFilteredCards] = useState([...cards]);
  // Route to click card details
  const handleCardPress = (id: string) => {
    router.push(`/properties/${id}`);
  };

  // Filter cards based on category
  useEffect(() => {
    setFilteredCards((prev) =>
      !params.filter || params.filter.toLowerCase() === 'all'
        ? cards
        : prev.filter((card) => card.category === params.filter?.toLowerCase()),
    );
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="h-full bg-white">
      {/* Render cards using flatlist */}
      <FlatList
        data={filteredCards}
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item._id)} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <>
            {/* If properties are loading, show loading indicator */}
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
            {/* Else show no properties found */}
            <NoResults />
          </>
        }
        // Header component
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={images.avatar as ImageSourcePropType}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    David
                  </Text>
                </View>
              </View>
              <Image
                source={icons.bell as ImageSourcePropType}
                className="size-6"
              />
            </View>
            {/* Search */}

            {/* Features */}
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {/* {latestPropertiesLoading ? ( */}
              {/* {featuredCards ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !featuredCards || featuredCards.length === 0 ? (
                <NoResults />
              ) : ( */}
              <FlatList
                data={featuredCards}
                // data={latestProperties}
                renderItem={({ item }) => (
                  <FeaturedCard
                    item={item}
                    onPress={() => handleCardPress(item._id)}
                  />
                )}
                keyExtractor={(item) => item._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
              {/* )} */}
            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Set if filtering parameters */}
              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
