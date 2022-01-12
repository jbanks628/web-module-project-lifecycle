import React from 'react';
// import User from './components/User';
// import Follower from './components/Follower';
// import FollowerList from './components/FollowerList';

class App extends React.Component {



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
      {/* <User />
      <Follower /> */}
    </div>);
  }
}

export default App;
