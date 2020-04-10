import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../../constants/routes';

import styles from '../Training.module.css';
import corporateCourses from './corporateCourses';


const Corporate = ()=> {
    const courses = corporateCourses;
    const coursesToShow = courses.map((course) => {
        return (
        course.show &&
        <Link to={{pathname: routes.COURSE_NO_ID + course.id}}>
            <img src={course.logo} alt={course.label}/>
            <p>{course.title}</p> 
        </Link>
        );
    }
    );

    return (
        <div className={styles.courses}>
            <h3>Corporate Training</h3>
            <div className={styles.corporate}>
                {coursesToShow}
            </div>

        </div>
    );
}

export default Corporate;