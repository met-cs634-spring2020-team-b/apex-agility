import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import courseList from '../../courseList';

const ScrumOrg = () => {

    const {psm, pspo, psd} = courseList;
    return(
        <div className={styles.courses}>
            <h3>Scrum.org</h3>
            <div>
                <Link to={{pathname: routes.COURSE_NO_ID + psm.id}}>
                    <img src={psm.logo} alt={psm.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + pspo.id}}>
                    <img src={pspo.logo} alt={pspo.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + psd.id}}>
                    <img src={psd.logo} alt={psd.label}/>
                </Link>
            </div>
        </div>

    );
}

export default ScrumOrg;