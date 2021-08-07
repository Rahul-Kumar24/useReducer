import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';

const Home = (props) => {
  console.log('hello',props)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>GoBack</Button>
    </Card>
  );
};

export default Home;
