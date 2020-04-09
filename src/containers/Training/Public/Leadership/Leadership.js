import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import courseList from '../../courseList';

const Leadership = () => {
    const {cal} = courseList;
    return(
        <div className={styles.courses}>
            <h3>Leadership</h3>
            <div>
                <Link to={{pathname: routes.COURSE_NO_ID + cal.id}}>
                    <img src={cal.logo} alt={cal.label}/> 
                </Link> 
                <div className={styles.dummy}></div>
                <div className={styles.dummy}></div>
            </div>
            
            
        </div>

    );
}

export default Leadership;