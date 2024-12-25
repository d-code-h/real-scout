import { getProperties } from '@/app/lib/appwrite';
import { useAppwrite } from '@/app/lib/useAppwrite';
import { Card } from '@/components/Cards';
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

const Explore = () => {
  const params = useLocalSearchParams<{
    query?: string;
    filter?: string;
  }>();

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
      limit: 20,
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
      limit: 20,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="h-full bg-white">
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
            {/* Navigation arrow back to home */}
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                Search for Your Ideal Home
              </Text>

              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />

            <View className="mt-5">
              <Text className="text-xl font-rubik-bold text-black-300 mt-5">
                Found {properties?.length} Properties
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;
