import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

// Screen
import { SignIn } from './src/screens/SignIn';

// Fonts
import {useFonts} from "expo-font";
import { 
  Inter_500Medium, 
  Inter_700Bold,
} from "@expo-google-fonts/inter"
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium
} from "@expo-google-fonts/rajdhani"


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium, 
    Inter_700Bold,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </>
  )
};