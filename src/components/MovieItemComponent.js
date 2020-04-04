import React from "react";
import Col from "react-native-col";
import { View, Image, Text } from "react-native";
import { connect } from "react-redux";

export const MovieItem = (props) => {
  let { item, title, release_date, overview, poster_path } = props;

  const onItemClicked = (item) => {};

  return (
    <View onStartShouldSetResponder={() => onItemClicked(item)}>
      <Col.L />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w92${poster_path}`,
          }}
        />
      </View>

      <Col.R />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text>{title}</Text>
        <Text>{release_date}</Text>
        <Text numberOfLines={4}>{overview}</Text>
      </View>
    </View>
  );
};

export default connect(null, {})(MovieItem);
