import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.ASSESSMENT}>Assessment</Link>
        </li>
        <li className={styles.dropdown}>
          <div className={styles.dropdownElement}>Training</div>
          <div className={styles.dropdownContent}>
            <Link to={routes.COURSES}>Public</Link>
            <Link to={routes.COURSES}>Corporate</Link>
            <Link to={routes.COURSES}>Upcoming Courses</Link>
          </div>
        </li>
        <li>
          <Link to={routes.COACHING}>Coaching</Link>
        </li>
        <li className={styles.dropdown}>
          <div className={styles.dropdownElement}>Resources</div>
          <div className={styles.dropdownContent}>
            <Link to={routes.ABOUT}>About Us</Link>
            <Link to={routes.CONTACT_US}>Contact Us</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
