import {
  Client,
  Account,
  Avatars,
  OAuthProvider,
  Databases,
  Query,
} from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import Constants from 'expo-constants';
import { AppConfig } from '@/types';
import { makeRedirectUri } from 'expo-auth-session';

// Set the platform, endpoint, and project ID
const {
  APPWRITE_PROJECT_ID,
  APPWRITE_PLATFORM,
  APPWRITE_ENDPOINT,
  APPWRITE_DATABASE_ID,
  APPWRITE_AGENTS_COLLECTION_ID,
  APPWRITE_GALLERIES_COLLECTION_ID,
  APPWRITE_REVIEWS_COLLECTION_ID,
  APPWRITE_PROPERTIES_COLLECTION_ID,
} = Constants.expoConfig?.extra as AppConfig;

// Configuration object for Appwrite integration, using environment variables.
export const config = {
  platform: APPWRITE_PLATFORM,
  endpoint: APPWRITE_ENDPOINT,
  projectId: APPWRITE_PROJECT_ID,
  databaseId: APPWRITE_DATABASE_ID,
  galleriesCollectionId: APPWRITE_GALLERIES_COLLECTION_ID,
  reviewsCollectionId: APPWRITE_REVIEWS_COLLECTION_ID,
  agentsCollectionId: APPWRITE_AGENTS_COLLECTION_ID,
  propertiesCollectionId: APPWRITE_PROPERTIES_COLLECTION_ID,
};

export const client = new Client();

client
  .setPlatform(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

// Add a function to handle login
export async function loginWithGoogle() {
  try {
    // Create a redirect URI
    // const redirectUri = 'restate:///';
    const deepLink = new URL(Linking.createURL('/'));

    if (!deepLink.hostname) {
      deepLink.hostname = 'localhost';
    }

    const redirectUri = deepLink + '/';

    // Create an OAuth2 token
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri,
    );

    // Throw an error if the response is empty
    if (!response) throw new Error('Failed to login');

    // Open the browser to authenticate the user
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri,
    );

    // Throw an error if the browser result is empty
    if (browserResult.type !== 'success') throw new Error('Failedy to login');

    // Parse the URL
    const url = new URL(browserResult.url);

    // Get the secret and user ID
    const secret = url.searchParams.get('secret')?.toString();
    const userId = url.searchParams.get('userId')?.toString();

    // Throw an error if the secret or user ID is empty
    if (!secret || !userId) throw new Error('Failed to login');

    // Create a session
    const session = await account.createSession(userId, secret);

    // Throw an error if the session is empty
    if (!session) throw new Error('Failed to create a session');

    // Return true if the session is created
    return true;
  } catch (error) {
    // Log the error
    console.error(error);

    // Return false if the session is not created
    return false;
  }
}

// Add a function to handle logout
export async function logout() {
  try {
    // Delete the current session
    await account.deleteSession('current');

    // Return true if the session is
    return true;
  } catch (error) {
    // Log the error
    console.error(error);

    // Return false if the session is not deleted
    return false;
  }
}

// Add a function to get user details
export async function getUser() {
  try {
    // First, check if the session exists and is valid
    let user = null;

    try {
      const session = await account.getSession('current'); // Try fetching the current session
      if (session) {
        user = await account.get(); // Fetch user details if session exists
      }
    } catch (error) {
      // Session does not exist or expired
      console.log('No active session found. Proceeding as guest...');
    }

    if (user && user.$id) {
      // If user data is available, get the avatar
      const userAvatar = await avatar.getInitials(user.name);
      return { ...user, avatar: userAvatar.toString() };
    }

    // If no user found or not authenticated, return null
    return null;
  } catch (error) {
    // Log and return null in case of any error
    console.error('Error fetching user details:', error);
    return null;
  }
}

export async function getLatestProperties() {
  try {
    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      [Query.orderAsc('$createdAt'), Query.limit(5)],
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc('$createdAt')];

    if (filter && filter !== 'All') {
      buildQuery.push(Query.equal('type', filter));
    }

    if (query) {
      buildQuery.push(
        Query.or([
          Query.search('name', query),
          Query.search('address', query),
          Query.search('type', query),
        ]),
      );
    }

    if (limit) {
      buildQuery.push(Query.limit(limit));
    }

    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      buildQuery,
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPropertyById({ id }: { id: string }) {
  try {
    // Fetch the property with the given id
    const result = await databases.getDocument(
      config.databaseId!,
      config.propertiesCollectionId!,
      id,
    );

    // Return property
    return result;
  } catch (error) {
    // If error, console error and return null
    console.log(error);
    return null;
  }
}
