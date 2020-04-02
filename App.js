/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import NavBar from "./src/components/NavbarComponent";
import SearchComponent from "./src/components/SearchComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: "" };
    this.arrayHolder = [];
  }

  componentDidMount() {
    return fetch("http://scb-movies-api.herokuapp.com/api/movies/search", {
      method: "GET",
      headers: "b281db381841c6ec99a6183c9945d76fb6634d60"
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayHolder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <SafeAreaView>
        <NavBar />
        <ScrollView>
          <SearchComponent />
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
