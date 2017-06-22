import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../ducks/login';

class Login extends React.Component {

  click(e) {
    e.preventDefault();
    this.props.validate();
  }

  render() {
      console.log(this.props);
      return (
          <div className='loginContainer'>
            <div className='loginHeader'>
                <h2>Logo</h2>
            </div>
            <form className='form-login'>
              <div className="loginInputs">
                <div className="form-field">
                  <label><img src='images/user.png'/></label>
                  <input id="login-username" type="text" className="form-input" placeholder="Username" onChange={(event) => this.props.updateInput(event.target.value, 'username')} value={this.props.login.loginInputsReducer.username} required />
                </div>
                <div className="form-field">
                    <label><img src='images/password.png'/></label>
                  <input id="login-password" type="password" className="form-input" placeholder="Password" onChange={(event) => this.props.updateInput(event.target.value, 'password')} value={this.props.login.loginInputsReducer.password} required />
                </div>
                <div style={{marginBottom: 0}} className="form-field">
                  <input  onClick={this.click.bind(this)} type="submit" value="Log in"/>
                </div>
              </div>
            </form>
          </div>
      );
  }
};

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    updateInput : (event, type) => dispatch(operations.updateInput(event, type)),
    validate  : () => dispatch(operations.validate())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
