import { getLatestProperties, getProperties } from '@/app/lib/appwrite';
import { useGlobalContext } from '@/app/lib/global-provider';
import { useAppwrite } from '@/app/lib/useAppwrite';
import { getGreeting } from '@/app/lib/util';
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import NoResults from '@/components/NoResults';
import Search from '@/components/Search';
import icons from '@/constants/icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{
    query?: string;
    filter?: string;
  }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    loading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  // Route to click card details
  const handleCardPress = (id: string) => {
    router.push(`/properties/${id}`);
  };

  // Filter cards based on category
  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="h-full bg-white">
      {/* Seed DB */}
      {/* <Button title="Seed" onPress={seed} /> */}

      {/* Render cards using flatlist */}
      <FlatList
        data={properties || []}
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            // If properties are loading, show loading indicator
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            // Else show no properties found
            <NoResults />
          )
        }
        // Header component
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{
                    uri: user?.avatar,
                  }}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good {getGreeting()}
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            {/* Search Functionality */}
            <Search />

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

              {latestPropertiesLoading ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !latestProperties || latestProperties.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={latestProperties || []}
                  // data={latestProperties}
                  renderItem={({ item }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
                />
              )}
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
