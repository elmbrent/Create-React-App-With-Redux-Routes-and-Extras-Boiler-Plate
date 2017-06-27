import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../ducks/login';
import FontAwesome from 'react-fontawesome';

const NavItem = ({url, active, icon, name}) => {
  return (
      <li>
        <a href={url} className={active === url ? 'active' : ''}>
          <FontAwesome name={icon} />{name}
        </a>
      </li>
  )
}

class Nav extends React.Component {
  render() {
      let activeRouter = "/"+this.props.router.location.pathname.split('/')[1]
      return (
          <nav className={(this.props.layout.toggleMenuReducer.isOpen) ? 'open' : 'closed'}>
            <div className='topBar'>
            </div>
            <ul>
              <NavItem icon='dashboard' url="/" icon='dashboard' name='Dashboard' active={activeRouter} />
              <NavItem icon='settings' url="/settings" icon='cog' name='Settings' active={activeRouter} />
              <NavItem icon='users' url="/users" icon='users' name='Users' active={activeRouter} />
              <li><a onClick={() => this.props.logOut() }><FontAwesome name='power-off' /> Logout</a></li>
            </ul>
          </nav>
      );
  }
};


const mapStateToProps = state => ({
    layout: state.layout,
    login: state.login,
    router : state.router
});

const mapDispatchToProps = dispatch => ({
    logOut : () => dispatch(operations.logOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
