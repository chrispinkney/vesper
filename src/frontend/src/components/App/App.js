import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../Splash/Splash';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = { province: '' };

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
        </Switch>
      </Router>
    );
  }
}

export default App;
