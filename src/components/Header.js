import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout, startLogin} from '../actions/auth';

const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    
    <NavLink to="/DashBoard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogout}>logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) =>({
  startLogout:()=>dispatch(startLogout())

})
export default connect(undefined, mapDispatchToProps)(Header);
