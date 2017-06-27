import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
  render() {
      return (
          <div>
            <h2>Users</h2>
            <p></p>
          </div>
      );
  }
};


export default connect()(Users);
