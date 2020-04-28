import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AlbumList from "./components/AlbumList";
import Base from "./components/base"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Base />
        <div class="container">
          <AlbumList />
        </div>
      </div>
    );
  }
}

export default App;
