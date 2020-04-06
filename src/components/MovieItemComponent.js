import React from "react";
import Col from "react-native-col";
import Row from "react-native-row";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Divider, Text } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export const MovieItem = (props) => {
  let { item, title, release_date, overview, poster_path } = props;

  const onItemClicked = () => {
    Actions.Detail({movieItem: item});
  };

  return (
    <TouchableOpacity onPress={onItemClicked}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imagePosition}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w92${poster_path}`,
            }}
            style={styles.imageSize}
          />
        </View>

        <View style={styles.textPosition}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{release_date}</Text>
          <Text style={styles.overviewText} numberOfLines={4}>
            {overview}
          </Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: "gray" }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  imageSize: {
    width: 100,
    height: 140,
  },
  textPosition: {
    width: 250,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 16,
    opacity: 0.5,
  },
  overviewText: {
    fontSize: 16,
  },
});

export default connect(null, {})(MovieItem);
