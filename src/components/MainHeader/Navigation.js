import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'
const Navigation = (props) => {
  const ctx = useContext(AuthContext)
  console.log(props)
  return (
    // <AuthContext.Consumer>
      
        <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <Button onClick={props.onLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    
    // </AuthContext.Consumer>
  );
};

export default Navigation;
