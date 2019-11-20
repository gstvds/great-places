import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import Colors from "../constants/Colors";

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default PlacesListScreen;
