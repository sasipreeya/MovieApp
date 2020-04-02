import React from "react";
import NavigationBar from "react-native-navbar";

const styles = {
  container: {
    flex: 1
  }
};

const rightButtonConfig = {
  title: "Favorite",
  handler: () => alert("Hello!")
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
