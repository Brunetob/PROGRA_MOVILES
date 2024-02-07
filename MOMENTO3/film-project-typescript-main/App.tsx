import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import config from './tamagui.config';

SplashScreen.preventAutoHideAsync();

import RootStack from './src/navigation';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={client}>
        <RootStack />
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
