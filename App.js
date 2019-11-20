import React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { StatusBar } from "react-native";

import PlacesNavigator from "./src/navigation/PlacesNavigator";
import placesReducer from './src/store/places-reducer'

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PlacesNavigator />
    </Provider>
  );
}
