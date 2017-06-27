import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../ducks/login';
import Login from '../login/index.js';
import Nav from '../layout/nav.js';
import Header from '../layout/header.js';
import '../../assets/styles/app.css';

class App extends React.Component {
  render() {
      if(this.props.login.loginReducer.loggedIn == true){
        //Remove login body class when logged in
        document.body.className = '';
        return (
          <div className="app">
            <Nav/>
            <main>
              <Header/>
              <div className='contentScroll'>
                {this.props.children}
              </div>
            </main>
          </div>
        );
      }
      //Return loggin if there not logged in to the app
      return (
          <Login/>
      );

  }
}

const mapStateToProps = state => ({
    login: state.login
});

export default connect(mapStateToProps)(App);
