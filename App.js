import React from "react";
import { StatusBar } from "react-native";

import PlacesNavigator from "./src/navigation/PlacesNavigator";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PlacesNavigator />
    </>
  );
}
