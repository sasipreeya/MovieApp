import React from "react";
import NavigationBar from "react-native-navbar";
import { Actions } from "react-native-router-flux";

const styles = {
  container: {
    flex: 1
  }
};

const rightButtonConfig = pageScene => {
  if (pageScene == "Search") {
    title: "Favorite";
    // handler: () => Actions.Favorite()
  } else if (pageScene == "Detail") {
    title: "Back to Search";
    // handler: () => Actions.Search()
  } else {
    title: "";
  }
};

const titleConfig = {
  title: "Movie Search"
};

export const NavbarComponent = props => {
  let { pageScene } = props;
  return (
    <NavigationBar
      title={titleConfig}
      rightButton={rightButtonConfig(pageScene)}
    />
  );
};
