import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "./App";
import SearchResult from "./src/scenes/SearchResultScene";
import Favorite from "./src/scenes/FavoriteScene";
import Detail from "./src/scenes/DetailScene";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" component={App} title="Search Page">
        <Scene Key="Search" component={App} title="Search Page" />
        <Scene
          Key="SearchResult"
          component={SearchResult}
          title="Search Result Page"
        />
        <Scene Key="Favorite" component={Favorite} title="Favorite Page" />
        <Scene Key="Detail" component={Detail} title="Detail Page" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
