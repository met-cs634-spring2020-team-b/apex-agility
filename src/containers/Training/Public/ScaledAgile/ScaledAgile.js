import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import courseList from '../../courseList';

const ScaledAgile = () => {
    const {safe, sp, lpm}  = courseList;
    return(
        <div className={styles.courses}>
            <h3>Scaled Agile 5.0</h3>
            <div>
                <Link to={{pathname: routes.COURSE_NO_ID + safe.id}}>
                    <img src={safe.logo} alt={safe.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + sp.id}}>
                    <img src={sp.logo} alt={sp.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + lpm.id}}>
                    <img src={lpm.logo} alt={lpm.label}/>
                </Link>
            </div>
        </div>

    );  
}
export default ScaledAgile;