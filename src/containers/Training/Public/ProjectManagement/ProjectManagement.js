import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import courseList from '../../courseList';

const ProjectManagement = () => {

    const {pmp, pmi} = courseList;
    return(
        <div className={styles.courses}>
            <h3>PMI</h3>
            <div>
                <Link to={{pathname: routes.COURSE_NO_ID + pmp.id}}>
                    <img src={pmp.logo} alt={pmp.label}/>
                 </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + pmi.id}}>
                    <img src={pmi.logo} alt={pmi.label}/>
                </Link>
                <div className={styles.dummy}></div>
            </div>
        </div>
    );
}

export default ProjectManagement;