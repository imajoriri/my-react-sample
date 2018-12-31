import React, { Component } from 'react';
import { createStore } from "redux";
import { connect } from 'react-redux'
import store from "./store";

import Comments from "./components/Comments";
import InputForm from "./components/InputForm";

class App extends Component {
  render() {
    return (
      <div>
        <InputForm state={store.getState()}/>
        <Comments state={store.getState()}/>
      </div>
    );
  }
}


export default App;
