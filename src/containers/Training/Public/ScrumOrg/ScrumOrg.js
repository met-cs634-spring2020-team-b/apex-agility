import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import scrumOrgCourses from './scrumOrgCourses';

const ScrumOrg = () => {

    const courses = scrumOrgCourses;
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
            <h3>Scrum.org</h3>
            <div>
                {coursesToShow}
            </div>
        </div>

    );
}

export default ScrumOrg;