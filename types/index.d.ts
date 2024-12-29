import { ImageSourcePropType } from 'react-native';

interface AppConfig {
  APPWRITE_PROJECT_ID: string;
  APPWRITE_PLATFORM: string;
  APPWRITE_ENDPOINT: string;
  APPWRITE_DATABASE_ID: string;
  APPWRITE_AGENTS_COLLECTION_ID: string;
  APPWRITE_GALLERIES_COLLECTION_ID: string;
  APPWRITE_REVIEWS_COLLECTION_ID: string;
  APPWRITE_PROPERTIES_COLLECTION_ID: string;
  APPWRITE_REDIRECT_URI: string;
}

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
