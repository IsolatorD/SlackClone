import React from "react";
import { SafeAreaView, ViewProps } from "react-native";

export interface IContainerProps extends ViewProps {}

export default function Container(props: IContainerProps) {
  return (
    <SafeAreaView
      {...props}
    >
      {props.children}
    </SafeAreaView>
  );
}