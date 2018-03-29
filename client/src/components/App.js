import React, { Component } from 'react';
import Header from "./Header";
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header page={'home'}/>
        <div className="jumbotron-fluid">
          <img className='card-img' id='img-home' src='https://embed.widencdn.net/img/americanredcross/2udcdkg926/exact/home-fire-safety-recovery-header-1920x703.jpg?quality=100&u=1abbhl' alt='Family searching through remains of house after fire.'/>
          <div className="card-img-overlay mt-5 pt-2">
            <div>
              <div className="row mt-5 pt-5">
                <div className="col-12">
                  <h1 className="App-title text-left rebuild-bl d-flex align-content-start ml-5">Project ReBuild<span className="rebuild-lt">: Helping you . . .
                  <span className="rebuild-bl text-center">ReBuild</span> your <span className="rebuild-or">HOUSE</span></span></h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="App-title text-center rebuild-lt"><span className="rebuild-bl">ReBuild</span> your <span className="rebuild-or">SANITY</span></h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="App-title text-center rebuild-lt"><span className="rebuild-bl">ReBuild</span> your <span className="rebuild-or">LIFE!</span></h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className="mt-5 pt-3 text-center text-white">Get started now with this helpful itemization and inventory tool! </h4>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 pt-5">
              <SearchBar className="text-center mt-5"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
