import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  state = {};
  render() {
    const { simpsons } = this.props;

    return (
      <>
        <ol>
          {simpsons.map((item, index) => {
            return (
              <Character
                item={item}
                key={item.id}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ol>
      </>
    );
  }
}

export default Simpsons;
