import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../Splash/Splash';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import Vaccines from '../Vaccines/Vaccines';
import Tests from '../Tests/Tests';
import AddTest from '../Tests/AddTest';
import AddVaccine from '../Vaccines/AddVaccine';
import VaccinesInfo from '../VaccinesInfo/VaccinesInfo';
import TestsInfo from '../TestsInfo/TestsInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    province: '',
    // user: {},
    user: {
      ohipNumber: '5584-486-674',
      ohipVersionCode: 'YM',
      fullName: 'Anita Jean Walker',
      dateOfBirth: 'December 15 1981',
      email: 'anita@gmail.com',
      vaccines: {
        'COVID-19 (Coronavirus)': {
          doses: ['Feb 14 2021', ''],
          status: false,
        },
        Shingles: {
          doses: ['March 03 2021', ''],
          status: false,
        },
        'Haemophilus Influenzae Type B': {
          doses: ['Jan 15 2000', 'March 15 2000', 'July 15 2000', 'September 15 2001'],
          status: true,
        },
      },
      tests: {
        'COVID-19 (Coronavirus)': {
          results: {
            'January 28 2021': 'Negative',
            'January 19 2021': 'Negative',
            'December 21 2020': 'Negative',
            'November 07 2020': 'Negative',
          },
        },
      },
      verification: 'abc123',
    },
  };

  // async componentDidMount() {
  //   const response = await fetch('api/getuser');
  //   const json = await response.json();
  //   this.setState(() => ({ user: json }));
  //   console.log('dbuser: ', this.state.user);
  //   console.log('localuser :', this.state.user2);
  //   console.log(this.state.user.vaccines.toString() === this.state.user2.vaccines.toString());
  // }

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
          <Route
            path="/addvaccines"
            exact
            render={() => <AddVaccine user={this.state.user} diseases={this.state.diseases} />}
          />
          <Route
            path="/addtests"
            exact
            render={() => <AddTest user={this.state.user} diseases={this.state.diseases} />}
          />
          <Route path="/tests" exact render={() => <Tests user={this.state.user} />} />
          <Route path="/vaccines-info" exact render={() => <VaccinesInfo />} />
          <Route path="/tests-info" exact render={() => <TestsInfo />} />
        </Switch>
      </Router>
    );
  }
}
