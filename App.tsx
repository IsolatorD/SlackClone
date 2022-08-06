import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigators/main";
import useThemeColor from "./src/modules/shared/hooks/useThemeColor";

export default function App() {
  const {theme, statusBarColor} = useThemeColor()
  return (
    <NavigationContainer
      theme={theme}
    >
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={statusBarColor}/>
      <MainNavigator />
    </NavigationContainer>
  );
}