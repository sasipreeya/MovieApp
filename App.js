import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import { NavbarComponent } from "./src/components/NavbarComponent";
import Search from "./src/components/SearchComponent";
import { HistoryList } from "./src/components/HistoryListComponent";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <NavbarComponent />
        <ScrollView>
          <Search />
          <HistoryList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
