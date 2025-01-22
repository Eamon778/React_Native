import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const defaultScreenOptions = {
    headerStyle: { backgroundColor: theme.headerBackground },
    headerTintColor: theme.text,
    headerShadowVisible: false,
  };

  return (
    <Stack screenOptions={defaultScreenOptions}>
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="menu" options={{ title: "Menu", headerShown: false }} />
      <Stack.Screen name="contact" options={{ title: "Contact us", headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
