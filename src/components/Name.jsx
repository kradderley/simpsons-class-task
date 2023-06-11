import React, { Component } from "react";
class Name extends Component {
  //   state = { like: false}; <-- this was moved up to the parent, Character to raise up the state (ie. callback)

  render() {
    const { like, character, onLikeToggle } = this.props;

    return (
      <div>
        <h1>{character}</h1>
        <button onClick={onLikeToggle}>{like ? "Like" : "Not Liked"}</button>
      </div>
    );
  }
}

export default Name;
