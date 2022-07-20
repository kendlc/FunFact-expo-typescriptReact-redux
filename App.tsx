import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import HomeScreen from "./src/views/Home";
import { Provider } from "react-redux";
import store from "./src/store";
import Navigator from "./src/navigations";

const Styles = StyleSheet.create({
  statusBarContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={Styles.statusBarContainer}>
        <StatusBar barStyle="light-content" />
      </View>
      <Navigator />
    </Provider>
  );
}