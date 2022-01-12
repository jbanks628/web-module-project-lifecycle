import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((item) => {
          return (
            <div>
              <img src={item.avatar_url} />
              <Follower key={item.id} item={item.login} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default FollowerList;
