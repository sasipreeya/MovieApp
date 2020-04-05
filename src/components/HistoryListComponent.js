import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View } from "react-native";
import { getSearchResult } from "../actions/search/searchAction";
import { Actions } from "react-native-router-flux";

export class HistoryList extends React.Component {
  render() {
    const { searchHistory } = this.props;
    return (
      <View>
        {searchHistory.map((item, index) => (
          <ListItem
            key={index}
            title={item}
            bottomDivider
            onPress={() => {
              getSearchResult(item);
              Actions.SearchResult();
            }}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchHistory: state.searchReducer.searchHistory,
  };
};

export default connect(mapStateToProps, { getSearchResult })(HistoryList);
