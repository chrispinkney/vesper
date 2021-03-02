import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../Splash/Splash';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Main from '../Main/Main';
import Vaccines from '../Vaccines/Vaccines';
import Tests from '../Tests/Tests';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    province: '',
    user: {
      ohipNumber: '5584-486-674',
      ohipVersionCode: 'YM',
      fullName: 'Anita Jean Walker',
      dateOfBirth: 'December 15 1981',
      email: 'anita@gmail.com',
      vaccines: {
        'covid-19 vaccine': 'ya',
      },
      tests: {
        'covid-19 test': 'ya',
      },
    },
  };

  onChangeProvince = async (province) => {
    await this.setState({ province: province });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Splash onChangeProvince={this.onChangeProvince} />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <Login headerText={this.state.province.province} />}
          />
          <Route
            path="/signup"
            exact
            render={(props) => <Signup headerText={this.state.province.province} />}
          />
          <Route path="/main" exact render={(props) => <Main user={this.state.user} />} />
          <Route
            path="/vaccines"
            exact
            render={(props) => <Vaccines headerText={this.state.province.province} />}
          />
          <Route
            path="/tests"
            exact
            render={(props) => <Tests headerText={this.state.province.province} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
