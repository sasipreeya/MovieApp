import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { search, getSearchResult } from "../actions/search/searchAction";
import { View } from "react-native";

export const HistoryList = props => {
  let { searchHistory } = props;
  var history = ["a", "b"];
  return (
    <View>
      {history.map((item, index) => (
        <ListItem
          key={index}
          title={item}
          bottomDivider
          onPress={() => {
            getSearchResult(item);
          }}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    searchHistory: state.searchReducer.searchHistory
  };
};

export default connect(mapStateToProps)(HistoryList);
