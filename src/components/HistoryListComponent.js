import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View } from "react-native";
import { searchHandler } from "../actions/search/searchAction";

class HistoryList extends React.Component {
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
            searchHandler(item);
          }}
        />
      ))}
    </View>
  );
  }
};

const mapStateToProps = state => {
  return {
    searchHistory: state.searchReducer.searchHistory
  };
};

export default connect(mapStateToProps, { searchHandler })(HistoryList);
