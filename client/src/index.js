import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import './index.css';
import App from './components/App';
import Product from "./components/Product"
import Form from "./components/Form"

import rootReducers from "./reducers";
import FormContainer from "./components/containers/FormContainer";
//import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/form" component={FormContainer} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);