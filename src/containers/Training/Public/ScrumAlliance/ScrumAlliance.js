import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import scrumAllianceCourses from './scrumAllianceCourses';

const ScrumAlliance = () => {

    const courses = scrumAllianceCourses;
    const coursesToShow = courses.map((course) => {
        return (
        course.show &&
        <Link to={{pathname: routes.COURSE_NO_ID + course.id}}>
            <img src={course.logo} alt={course.label}/> 
        </Link>
        );
    }
    );

    return(
        <div className={styles.courses}>
            <h3>Scrum alliance</h3>
            <div>
                {coursesToShow}
            </div>
        </div>

    );
}

export default ScrumAlliance;