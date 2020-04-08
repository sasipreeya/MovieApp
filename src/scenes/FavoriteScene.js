import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { MovieItem } from "../components/MovieItemComponent";
import PTRView from "react-native-pull-to-refresh";
import { Actions } from "react-native-router-flux";

export class FavoriteScene extends React.Component {
  _refresh = () => {
    return new Promise((resolve) => {
      Actions.refresh();
      setTimeout(()=>{resolve()}, 2000)
    });
  }

  render() {
    const { favoriteList } = this.props;
    return (
      <PTRView onRefresh={this._refresh}>
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
      </PTRView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteReducer.favoriteList,
  };
};

export default connect(mapStateToProps)(FavoriteScene);
