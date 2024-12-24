import { Redirect, Slot } from 'expo-router';

const Layout = () => {
  return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default Layout;
