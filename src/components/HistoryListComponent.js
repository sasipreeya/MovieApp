import React from "react";
import { ListItem } from "react-native-elements";
import { search, getSearchResult } from "../actions/search/searchAction";
import { View } from "react-native";

export const HistoryList = props => {
  let { historyList } = props;
  return (
    <View>
      {historyList.map((item, index) => (
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
