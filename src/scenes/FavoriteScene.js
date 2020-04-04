import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View } from "react-native";
import { MovieItem } from "../components/MovieItemComponent";

export class FavoriteScene extends React.Component {
  render() {
    const { favoriteList } = this.props;
    return (
      <View>
        {favoriteList.map(result => (
            {result.map((item, index) => (
                <MovieItem 
                    item={item}
                    title={item.title} 
                    release_date={item.release_date}
                    overview={item.overview}
                    poster_path={item.poster_path}
                />
            ))}
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteList: state.favoriteReducer.favoriteList
  };
};

export default connect(mapStateToProps)(SearchResultScene);
