import axios from "axios";
import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import styled from "styled-components";

const InputStyle = styled.input`
  background-color: black;
  padding: 15px 45px;
  letter-spacing: 0.05px;
  margin-right: 3px;
  margin-left: 2%;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  ::placeholder {
    color: white;
    font-size: 1.3rem;
  }
`;
const Header = styled.h1`
  font-size: 3rem;
`;
const Div = styled.div`
  font-family: "Cabin", sans-serif;
  button {
    padding: 10px 25px;
    font-size: 1.3rem;
    background-color: #bfc0c0;
    color: white;
  }
  img {
    margin: 2%;
  }
`;
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
      <Div>
        <Header>GITHUB INFO</Header>
        <form>
          <InputStyle placeholder="Github Handle" name="handle" type="text" />
          <button>Search</button>
        </form>

        <User user={this.state.userInfo} />
        <FollowerList list={this.state.followerInfo} />
      </Div>
    );
  }
}

export default App;
