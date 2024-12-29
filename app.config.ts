import 'dotenv/config';

export default {
  name: 'Real Scout',
  slug: 'real-scout',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'restate',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.d_code_h.real_scout',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash.png',
        resizeMode: 'cover',
        backgroundColor: '#ffffff',
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Rubik-Light.ttf',
          './assets/fonts/Rubik-Medium.ttf',
          './assets/fonts/Rubik-Regular.ttf',
          './assets/fonts/Rubik-Bold.ttf',
          './assets/fonts/Rubik-SemiBold.ttf',
          './assets/fonts/Rubik-ExtraBold.ttf',
        ],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '76a3510f-503d-4315-8455-ff8a70225656',
    },

    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_PLATFORM: process.env.APPWRITE_PLATFORM,
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    APPWRITE_DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
    APPWRITE_AGENTS_COLLECTION_ID: process.env.APPWRITE_AGENTS_COLLECTION_ID,
    APPWRITE_GALLERIES_COLLECTION_ID:
      process.env.APPWRITE_GALLERIES_COLLECTION_ID,
    APPWRITE_REVIEWS_COLLECTION_ID: process.env.APPWRITE_REVIEWS_COLLECTION_ID,
    APPWRITE_PROPERTIES_COLLECTION_ID:
      process.env.APPWRITE_PROPERTIES_COLLECTION_ID,
  },
  owner: 'dcodeh',
};
