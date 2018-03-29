import React, { Component } from 'react';
import Header from "./Header";
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'
import bird from './birtd.png'
import heart from './heart.png'
import house from './house.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header page={'home'}/>
        <div className="container-fluid content">
          <div className="card-img-overlay mt-5 pt-2">
            <div>
              <div className="row mt-5 pt-5">
                <div className="col-12">
                  <h1 className="App-title rebuild-bl text-center mb-5">Helping you ReBuild your </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="App-title text-center rebuild-lt">HOUSE</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="App-title text-center rebuild-lt">SANITY</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="App-title text-center rebuild-lt">LIFE!</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className="mt-5 pt-3 text-center text-white">Get started now with this helpful itemization and inventory tool! </h4>
                </div>
              </div>
            </div>
            <div className="text-center pt-5">
              <SearchBar className="text-center mt-5"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
