import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div>
        {this.props.image}
        {this.props.item}
      </div>
    );
  }
}
export default Follower;
