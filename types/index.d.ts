import { ImageSourcePropType } from 'react-native';

export interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

export interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
  loading: boolean;
}

export interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

// Appwrite
interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams?: P) => Promise<void>;
}

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
