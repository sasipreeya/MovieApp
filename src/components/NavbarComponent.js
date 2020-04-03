import React from "react";
import NavigationBar from "react-native-navbar";
import { Actions } from "react-native-router-flux";

const styles = {
  container: {
    flex: 1
  }
};

const rightButtonConfig = {
  title: "Favorite",
  handler: () => alert("hello!")
};

const titleConfig = {
  title: "Movie Search"
};

export const NavbarComponent = () => {
  return <NavigationBar title={titleConfig} rightButton={rightButtonConfig} />;
};
