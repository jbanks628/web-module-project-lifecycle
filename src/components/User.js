import React from "react";
import axios from "axios";

class User extends React.Component {
  state = {
    userInfo: [],
  };

  render() {
    const { avatar_url, name, login, public_repos, followers } =
      this.props.user;
    return (
      <div>
        <img src={avatar_url} />
        <h2>{name}</h2>({login})<h3>TOTAL REPOS: {public_repos}</h3>
        <h3>TOTAL FOLLOWERS: {followers}</h3>
      </div>
    );
  }
}
export default User;
