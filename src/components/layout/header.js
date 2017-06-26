import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import { operations } from '../../ducks/layout';

class Header extends React.Component {
  render() {
      return (
          <header>
            <div className='handleBars'>
              <FontAwesome onClick={() => this.props.toggleMenu() } name='bars' />
            </div>
          </header>
      );
  }
};

const mapStateToProps = state => ({
    layout: state.layout
});

const mapDispatchToProps = dispatch => ({
    toggleMenu : () => dispatch(operations.toggleMenu())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
