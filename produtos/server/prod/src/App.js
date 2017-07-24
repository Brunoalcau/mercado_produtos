import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/organisms/NavBar/navbar';
import InpuGroup from './components/molecules/Input-group/input-group';
import ListView from './components/organisms/ListView/list-view';
import DetailProduction from './components/organisms/DetailProduction/detail-production';
import Breadcrumbs from './components/atoms/Breadcrumbs/breadcrumbs';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
          <NavBar />
          <main className="main">
            <Breadcrumbs className="breadcrumbs"/>
            <div className="spa">
                <Route exact path="/" component={ListView} />
                <Route path="/detail-production/:id" component={DetailProduction} />
              {/*<DetailProduction className="list-view" />*/}
            </div>
          </main>
      </div>
    </Router>
    );
  }
}
export default App;
