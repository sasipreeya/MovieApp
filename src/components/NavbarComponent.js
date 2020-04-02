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
  handler: () => Actions.Favorite()
};

const titleConfig = {
  title: "Movie Search"
};

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <NavigationBar title={titleConfig} rightButton={rightButtonConfig} />
    );
  }
}
