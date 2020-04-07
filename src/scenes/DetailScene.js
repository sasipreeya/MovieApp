import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addFav, removeFav } from "../actions/favorite/favoriteAction";
import { Divider, Text, Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export class DetailScene extends Component {
  renderButton = (movieItem, favoriteList) => {
    if (favoriteList.length == 0) {
      return (
        <Button
          title="Favorite"
          buttonStyle={{
            backgroundColor: "orange",
          }}
          onPress={() => this.props.addFav(movieItem)}
        />
      );
    } else {
      return (
        <Button
          title="Unfavorite"
          buttonStyle={{
            backgroundColor: "orange",
          }}
          onPress={() => this.props.removeFav(this.props.movieItem.id)}
        />
      );
    }
  };

  render() {
    const { movieItem, favoriteList } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w92${
                this.props.movieItem.poster_path
              }`,
            }}
            style={styles.imageSize}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Text style={styles.titleText}>{this.props.movieItem.title}</Text>
          <Text style={styles.subTitleText}>
            Average votes: {this.props.movieItem.vote_average}
          </Text>
          <Text style={styles.overviewText} numberOfLines={4}>
            {this.props.movieItem.overview}
          </Text>
        </View>
        <View style={{ marginTop: 200 }}>
          {this.renderButton(movieItem, favoriteList)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageSize: {
    width: 150,
    height: 250,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  subTitleText: {
    fontSize: 16,
    margin: 5,
  },
  overviewText: {
    fontSize: 14,
    margin: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteReducer.favoriteList,
  };
};

export default connect(
  mapStateToProps,
  { addFav, removeFav }
)(DetailScene);
