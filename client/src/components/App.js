import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Welcome to Project ReBuild</h1>
        </header>
        <p className="App-intro">
        <img src="http://paintingandframe.com/uploadpic/cornelis_troost/big/the_phoenix.jpg" alt="The Phoenix, by Cornelis Troost"/>
          
        </p>
      </div>
    );
  }
}

export default App;
