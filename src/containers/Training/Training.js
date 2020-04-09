import React from 'react';
import styles from './Training.module.css';

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
                <div className={styles.dropDownContainer}>
                    <div><h3>Course Type</h3></div>
                    <div><h3>Certifying Body</h3></div>
                    <div><h3>Role</h3></div>
                </div>
                <Public/>
                <Corporate/>
            </div>
            
        </div>

    );
}

export default Training;
