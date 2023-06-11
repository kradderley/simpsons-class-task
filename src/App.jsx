import React, { Component } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import Loading from "./components/Loading";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
    );

    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    console.log(data);

    this.setState({ simpsons: data });
  }

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });

    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>No more characters remaining!</p>;

    return (
      <>
        <h1>Total No. of Liked Characters:</h1>
        <Simpsons simpsons={this.state.simpsons} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
