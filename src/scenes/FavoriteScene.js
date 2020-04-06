import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { MovieItem } from "../components/MovieItemComponent";

export class FavoriteScene extends React.Component {
  render() {
    const { favoriteList } = this.props;
    console.log(this.props.favoriteList);
    return (
      <ScrollView>
        <View>
          {favoriteList.map((item, index) => (
            <MovieItem
              item={item}
              title={item.title}
              release_date={item.release_date}
              overview={item.overview}
              poster_path={item.poster_path}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteReducer.favoriteList,
  };
};

export default connect(mapStateToProps)(FavoriteScene);
