import React from "react";
import App from "./App";
import SearchResult from "./src/scenes/SearchResultScene";
import Favorite from "./src/scenes/FavoriteScene";
import Detail from "./src/scenes/DetailScene";
import { Actions, Scene, Router } from "react-native-router-flux";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="Search"
          component={App}
          rightTitle="Favorite"
          onRight={() => Actions.Favorite()}
        />
        <Scene
          key="SearchResult"
          component={SearchResult}
          title="Search Result Page"
        />
        <Scene key="Favorite" component={Favorite} title="Favorite Page" />
        <Scene
          key="Detail"
          component={Detail}
          title="Detail Page"
          rightTitle="Back to Search"
          onRight={() => Actions.Search()}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
