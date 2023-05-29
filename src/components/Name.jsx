import React, { Component } from "react";
class Name extends Component {
//   state = { like: false}; <-- this was moved up to the parent, Character to raise up the state (ie. callback)

  render() {

    const { like, character } = this.props; 

    return (
      <div>
        <h1>{character}</h1>
        <button
          onClick={this.props.onLikeToggle}
        >
          {like ? 'Like' : 'Not Liked'}
        </button>
      </div>
    );
  }
}

export default Name;
