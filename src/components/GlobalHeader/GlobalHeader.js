import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import Button from '../Button';

import Navigation from './Navigation';
import styles from './GlobalHeader.module.css';

const GlobalHeader = () => {
  return (
    <Headroom>
      <header className={styles.header}>
        <div className={styles.logo}>
          Logo
        </div>
        <Navigation />
        <Button>
          <Link to={routes.COURSES}>View Courses</Link>
        </Button>
      </header>
    </Headroom>
  )
};

export default GlobalHeader;
