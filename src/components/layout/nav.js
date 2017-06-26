import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../ducks/layout';
import FontAwesome from 'react-fontawesome';

class Nav extends React.Component {


  render() {

      return (
          <nav className={(this.props.layout.toggleMenuReducer.isOpen) ? 'open' : 'closed'}>
            <div className='topBar'>

            </div>
            <ul>
              <li><a className="active">  <FontAwesome name='dashboard' /> Dashboard</a></li>
              <li><a>  <FontAwesome name='cog' /> Settings</a></li>
              <li><a>  <FontAwesome name='users' /> Users</a></li>
              <li><a>  <FontAwesome name='power-off' /> Logout</a></li>
            </ul>
          </nav>
      );
  }
};
const mapStateToProps = state => ({
    layout: state.layout
});


export default connect(mapStateToProps)(Nav);
