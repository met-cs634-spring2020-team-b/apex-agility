import React from 'react';
import styles from './Training.module.css';

import CourseDropdown from './CoursesDropdown';
import Public from './Public';
import Corporate from './Corporate';


const Training = () => {
    return(
        <div className={styles.trainingContainer}>
            <div className={styles.topBackground}>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.title}>
                    <h2> Training</h2>
                </div>
                <CourseDropdown/>
                <Public/>
                <Corporate/>
            </div>
            
        </div>

    );
}

export default Training;
