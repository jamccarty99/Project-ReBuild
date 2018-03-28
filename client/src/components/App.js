import React, { Component } from 'react';
import Header from "./Header";
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header page={'home'}/>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="App-title text-left rebuild-bl d-flex align-content-start">Project ReBuild<span className="rebuild-lt">: Helping you</span></h1>
              <h1 className="App-title text-center rebuild-lt"><span className="rebuild-bl">ReBuild</span> your <span className="rebuild-or">HOUSE</span></h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="App-title text-center rebuild-lt"><span className="rebuild-bl">ReBuild</span> your <span className="rebuild-or">SANITY</span></h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="App-title text-center rebuild-lt"><span className="rebuild-bl">ReBuild</span> your <span className="rebuild-or">LIFE!!</span></h1>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <SearchBar className="text-center mt-5"/>
        </div>
      </div>
    );
  }
}

export default App;
