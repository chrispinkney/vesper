import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../Splash/Splash';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import Vaccines from '../Vaccines/Vaccines';
import Tests from '../Tests/Tests';
import VaccinesInfo from '../VaccinesInfo/VaccinesInfo';
import TestsInfo from '../TestsInfo/TestsInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    province: '',
    user: {
      ohipNumber: '5584-486-674',
      ohipVersionCode: 'YM',
      fullName: 'Anita Jean Walker',
      dateOfBirth: 'December 15 1981',
      email: 'anita@gmail.com',
      vaccines: {
        'COVID-19 (Coronavirus)': {
          doses: [{ 'First Dose': 'Feb 14 2021' }, { 'Second Dose': '' }],
        },
      },
      tests: {
        'covid-19': false,
      },
      verification: 'abc123',
    },
  };

  onChangeProvince = (province) => {
    this.setState(() => ({
      province,
    }));
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Splash onChangeProvince={this.onChangeProvince} />}
          />
          <Route
            path="/login"
            exact
            render={() => <Login province={this.state.province.province} />}
          />
          <Route
            path="/signup"
            exact
            render={() => <Signup province={this.state.province.province} />}
          />
          <Route path="/home" exact render={() => <Home user={this.state.user} />} />
          <Route path="/vaccines" exact render={() => <Vaccines user={this.state.user} />} />
          <Route path="/tests" exact render={() => <Tests user={this.state.user} />} />
          <Route path="/vaccines-info" exact render={() => <VaccinesInfo />} />
          <Route path="/tests-info" exact render={() => <TestsInfo />} />
        </Switch>
      </Router>
    );
  }
}
