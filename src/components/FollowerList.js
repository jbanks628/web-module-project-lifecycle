import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  //   state = {
  //       followerInfo = []
  //   }

  render() {
    // const { avatar_url, login, followerInfo } = this.props.list;
    return (
      <div>
        {this.props.list.map((item) => {
          return (
            <Follower key={item.id} image={item.avatar_url} item={item.login} />
          );
        })}
      </div>
    );
  }
}
export default FollowerList;
