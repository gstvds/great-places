import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Place Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle")
  };
};

export default PlaceDetailScreen;
