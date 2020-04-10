import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CourseMain.module.css';
import content from './content';
import Button from '../../components/Button';

import instructorImg2 from './assets/instructor_2.jpg';

import reviewer1 from './assets/reviewer_1.jpg';
import reviewer2 from './assets/reviewer_2.jpg';
import reviewer3 from './assets/reviewer_3.jpg';
import reviewer4 from './assets/reviewer_4.jpg';

import courseList from '../Training/courseList';


const CourseMain = (props) => {
    const courseId = props.match.params.courseId;
    
    const courses = courseList.reduce(function(prev, curr) {
        return prev.concat(curr);
    })

    const course = courses.find(function(c) {
        return c.id === courseId;
    })

    const {placeholder, instructor, reviews} = content;

    return(
        <div className={styles.courseContainer}>

            <div className={styles.topBackground}>
                <p>Background Image</p>
            </div>

            <div className={styles.courseInfo}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <img src={course.logo} alt={course.label}/>
                    </div>
                    
                    <div className={styles.courseTitleOuter}>
                        <div className={styles.courseTitleInner}>
                            <ul>
                                <li>Course Title:  {course.title}</li>
                                <li>Start date:</li>
                                <li>Location:</li>
                            </ul>
                        </div>
                        <div className={styles.registerBtn}>
                            <Button>
                                <Link>Register</Link>
                            </Button>
                         </div>
                    </div>
                   
                </div>


                <div className={styles.middle}>
                    <div className={styles.midLeft}>

                        <div className={styles.midLeftTop}>
                            <h1>About this course</h1>
                            <div className={styles.textBox}>
                                <p>{placeholder}</p>
                            </div>
                        </div>

                        <div className={styles.midLeftCenter}>
                            <h1>What you learn?</h1>
                            <div className={styles.textBox}>
                                 <p>{placeholder}</p>
                            </div>
                        </div>

                        <div className={styles.midLeftBottom}>
                            <h1>Meet the instructor</h1>
                            <div className={styles.instructorInfo}>
                                <div className={styles.firstRow}>
                                    <img src={instructorImg2} alt="instructor-2"/>
                                     <p>{instructor}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.middleRight}>
                        <div className={styles.midRightTop}>
                            <ul>
                                <li> Course Length:</li>
                                <li> Effort: </li>
                                <li> Price: </li>

                            </ul>
                        </div>

                        <div className={styles.midRightBottom}>
                            <h1>Reviews</h1>
                            <div className={styles.reviews}>
                                <img src={reviewer1} alt="first-reviewer"/>
                                <div className={styles.textBox}>
                                     <p>{reviews.first}</p>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer2} alt="second-reviewer"/>
                                <div className={styles.textBox}>
                                     <p>{reviews.second}</p>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer3} alt="third-reviewer"/>
                                <div className={styles.textBox}>
                                     <p>{reviews.third}</p>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer4} alt="fourth-reviewer"/>
                                <div className={styles.textBox}>
                                     <p>{reviews.fourth}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.bottom}>
                    <div className={styles.registerBtn}>
                        <Button>
                            <Link>Register</Link>
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CourseMain;