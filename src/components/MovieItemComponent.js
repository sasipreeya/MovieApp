import React from "react";
import Col from "react-native-col";
import Row from "react-native-row";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import { Divider, Text } from "react-native-elements";

export const MovieItem = (props) => {
  let { item, title, release_date, overview, poster_path } = props;

  const onItemClicked = (item) => {};

  return (
    <View>
      <View
        onStartShouldSetResponder={() => onItemClicked(item)}
        style={{ flexDirection: "row" }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w92${poster_path}`,
            }}
            style={{ width: 100, height: 140 }}
          />
        </View>

        <View
          style={{
            width: 250,
            padding: 10,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 16, opacity: 0.5 }}>{release_date}</Text>
          <Text style={{ fontSize: 16 }} numberOfLines={4}>
            {overview}
          </Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: "gray" }} />
    </View>
  );
};

export default connect(null, {})(MovieItem);
