import React from "react";
import { Text, View } from "react-native";
import DawerTitleStyles from "./DrawerTitleStyles";

interface DrawerTitleProps {
  title: string;
  isDarkMode: boolean;
}

export default function DrawerTitle({ title, isDarkMode }: DrawerTitleProps) {
  return (
    <View
      testID="drawer-title-container"
      style={DawerTitleStyles.titleContainer}
    >
      <Text
        testID="drawer-title"
        allowFontScaling={false}
        style={[
          DawerTitleStyles.title,
          isDarkMode && DawerTitleStyles.titleDark
        ]}
      >
        {title}
      </Text>
    </View>
  )
}