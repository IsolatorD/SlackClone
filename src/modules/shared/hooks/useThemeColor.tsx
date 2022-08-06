import React from "react";
import { useColorScheme } from "react-native";
import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import ThemeColors, { dark } from "../constants/theme";

export default function useThemeColor() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  let theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: ThemeColors.primary,
      background: ThemeColors.white,
      text: ThemeColors.black,
      primary: ThemeColors.black,
    }
  }

  if (isDark) {
    theme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        card: dark.primary,
        background: dark.secondary,
        text: ThemeColors.white,
        primary: ThemeColors.white,
      }
    }
  }

  return {
    theme,
    statusBarColor: theme?.colors?.card,
    drawerColor: isDark ? dark.secondary : ThemeColors.white,
    isDarkMode: isDark,
  };
}