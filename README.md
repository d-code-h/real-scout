# Real Scout 🏡

Build a **full-stack Real Estate application** with **React Native**, featuring **Google authentication**, **dynamic property listings**, and **user profiles**. Designed with modern tools like **Expo SDK 52**, **Appwrite**, **Tailwind CSS**, and **TypeScript** for a seamless and scalable experience. 🚀

![Real Estate](/assets/images/realestate.png)

## Features ✨

- **Google Authentication**: Easily sign up and log in using Google accounts.
- **Dynamic Property Listings**: Browse and filter available real estate properties.
- **User Profiles**: Manage user profiles and saved properties.
- **Real-time Database with Appwrite**: Sync user data and property listings in real-time.
- **Responsive Design with Tailwind CSS**: A beautiful, responsive UI that works on mobile and web.
- **Built with Expo SDK**: Fast development with Expo and TypeScript for a seamless experience.

## Tech Stack ⚙️

- **Frontend**: React Native, Expo, Tailwind CSS, TypeScript
- **Backend**: Appwrite (Database, Authentication)
- **Authentication**: Google OAuth via Expo Auth Session
- **State Management**: React Context API
- **Navigation**: React Navigation (Bottom Tabs, Stacks)
- **UI Styling**: NativeWind (Tailwind for React Native)

## Prerequisites 🛠

Before you start, make sure you have the following installed:

- **Bun** (for package management and script running)
- **Node.js** (version 18 or higher)
- **Expo CLI** (for running the Expo app)
- **Appwrite** account (for backend)

## Getting Started 🚀

### 1. Clone the repository

```bash
git clone https://github.com/d-code-h/real-scout.git
cd real-scout
```

### 2. Install dependencies

This project uses Bun, you can install all dependencies with:
`bun install`

### 3. Set up environment variables

Create a .env file in the root directory and add your Appwrite and Google OAuth credentials:

```
APPWRITE_PROJECT_ID='your-appwrite-id'
APPWRITE_PLATFORM='your-appwrite-platform'
APPWRITE_ENDPOINT='your-appwrite-endpoint'
APPWRITE_DATABASE_ID='your-appwrite-database-id'
APPWRITE_AGENTS_COLLECTION_ID='your-appwrite-agents-collection-id'
APPWRITE_GALLERIES_COLLECTION_ID='your-appwrite-galleries-collection-id'
APPWRITE_REVIEWS_COLLECTION_ID='your-appwrite-reviews-collection-id'
APPWRITE_PROPERTIES_COLLECTION_ID='your-appwrite-properties-collection-id'
```

### 4. Run the app in development

`bun start` or `bunx expo start`

### 📱 Live App (APK)

Download the apk app [here](https://drive.google.com/file/d/1x_xMw_PoPhOhv0H78OQi8PSUozqzJ5u8/view?usp=drive_link)

## ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg) License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
