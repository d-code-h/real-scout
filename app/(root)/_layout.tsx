import { Redirect, Slot } from 'expo-router';
import { useGlobalContext } from '../../lib/global-provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';

const Layout = () => {
  // Get the loading and isLogged global state
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      // Render an loading indicator
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    // Redirect to sign in page if not logged in
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
};

export default Layout;
