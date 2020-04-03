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

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { searchHistory } = this.props;
    return (
      <SafeAreaView>
        <NavbarComponent />
        <ScrollView>
          <Search />
          <HistoryList historyList={searchHistory} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchWords: state.searchReducer.searchWords,
    searchHistory: state.searchReducer.searchHistory
  };
}

export default connect(mapStateToProps)(App);
