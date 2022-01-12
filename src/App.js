import axios from "axios";
import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    userInfo: {},
    followerInfo: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jbanks628")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          userInfo: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidUpdate(initProps, initState) {
    if (this.state.userInfo !== initState.userInfo) {
      axios
        .get(`https://api.github.com/users/jbanks628/followers`)
        .then((res) => {
          console.log(res.data);
          this.setState({
            ...this.state,
            followerInfo: res.data,
          });
        })
        .catch((err) => console.error(err));
    }
  }
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input placeholder="Github Handle" name="handle" />
          <button>Search</button>
        </form>

        <User user={this.state.userInfo} />
        <FollowerList list={this.state.followerInfo} />
      </div>
    );
  }
}

export default App;
