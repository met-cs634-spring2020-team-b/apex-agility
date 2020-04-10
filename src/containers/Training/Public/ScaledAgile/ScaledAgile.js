import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import scaledAgileCourses from './scaledAgileCourses'

const ScaledAgile = () => {

    const courses = scaledAgileCourses;
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
            <h3>Scaled Agile 5.0</h3>
            <div>
               {coursesToShow}
            </div>
        </div>

    );  
}
export default ScaledAgile;