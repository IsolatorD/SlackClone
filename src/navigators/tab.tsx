import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeModuleNavigator from "../modules/home";

const Tab = createBottomTabNavigator();

export default function TabNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeModule" component={HomeModuleNavigator} />
    </Tab.Navigator>
  );
}