import axios from 'axios';
import React from 'react';
import User from './components/User';
// import Follower from './components/Follower';
// import FollowerList from './components/FollowerList';

class App extends React.Component {

state = {
  userInfo: []
}

componentDidMount(){
  axios.get('https://api.github.com/users/jbanks628')
  .then(res=>{
    this.setState({
      ...this.state,
      userInfo: res.data
    })
  })
  .catch(err=>console.error(err))
}

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input
        placeholder='Github Handle'
        name='handle'
        />
        <button>Search</button>
      </form>
      <div>
      <User />
      {/* <Follower /> */}
      </div>
    </div>);
  }
}

export default App;
