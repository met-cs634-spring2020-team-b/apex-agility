import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Training.module.css';
import routes from '../../../../constants/routes';
import leadershipCourses from './leadershipCourses';


const Leadership = () => {
    
    const courses = leadershipCourses;
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
            <h3>Leadership</h3>
            <div>
                {coursesToShow}
                <div className={styles.dummy}></div>
                <div className={styles.dummy}></div>
            </div>
            
            
        </div>

    );
}

export default Leadership;