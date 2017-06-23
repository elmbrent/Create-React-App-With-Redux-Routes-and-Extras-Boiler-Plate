import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../ducks/login';
import Login from '../login/index.js';
import '../../assets/styles/app.css';

class App extends React.Component {
  render() {
    if(this.props.login.loginReducer.loggedIn == true){
      return (
        <div className="App">
          <main>{this.props.children}</main>
        </div>
      );
    }
    return (
      <div className="App">
        <Login/>
      </div>
    );

  }
}




const mapStateToProps = state => ({
    login: state.login
});

export default connect(mapStateToProps)(App);
