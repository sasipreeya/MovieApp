import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { connect } from "react-redux";
import { ListItem } from 'react-native-elements'
import NavBar from "./src/components/NavbarComponent";
import Search from "./src/components/SearchComponent";
import HistoryList from "./src/components/HistoryListComponent";

class App extends React.Component {
  const { searchHistory } = this.props
  render() {
    return (
      <SafeAreaView>
        <NavBar />
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default connect(mapStateToProps)(App);
