
import '../../global.css';
import { Inter_900Black as bold, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [Visible, setVisible] = useState(false);
  let [Loaded, error] = useFonts({
    bold,
  });

  useEffect(() => {
    if (Loaded) {
      SplashScreen.hideAsync();
    }
  }, [Loaded]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/(tab)" />
    </Stack>
  );
}
