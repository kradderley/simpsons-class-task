import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  state = {};
  render() {
    const { simpsons } = this.props;

    return (
      <>
        <ol>
          {simpsons.map((item) => {
            return <Character item ={item} key={item.quote} />;
          })}
        </ol>
      </>
    );
  }
}

export default Simpsons;
