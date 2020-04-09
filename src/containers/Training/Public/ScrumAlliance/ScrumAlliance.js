import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import courseList from '../../courseList';

const ScrumAlliance = () => {

    const {csm, cspo, csd} = courseList;
    return(
        <div className={styles.courses}>
            <h3>Scrum alliance</h3>
            <div>
                <Link to={{pathname: routes.COURSE_NO_ID + csm.id}}>
                    <img src={csm.logo} alt={csm.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + cspo.id}}>
                    <img src={cspo.logo} alt={cspo.label}/>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + csd.id}}>
                    <img src={csd.logo} alt={csd.label}/>
                </Link>
            </div>
        </div>

    );
}

export default ScrumAlliance;