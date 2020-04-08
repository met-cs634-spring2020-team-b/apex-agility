import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CourseMain.module.css';
import Content from './Content';
import Button from '../../components/Button';

import instructorImg1 from './assets/instructor_1.jpg';
import instructorImg2 from './assets/instructor_2.jpg';

import reviewer1 from './assets/reviewer_1.jpg';
import reviewer2 from './assets/reviewer_2.jpg';
import reviewer3 from './assets/reviewer_3.jpg';
import reviewer4 from './assets/reviewer_4.jpg';

import courseList from '../Training/courseList';


const CourseMain = (props) => {
    const courseId = props.match.params.courseId;
    const course = courseList[courseId];

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
                                <li>Course title:</li>
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
                                <Content/>
                            </div>
                        </div>

                        <div className={styles.midLeftCenter}>
                            <h1>What you learn?</h1>
                            <div className={styles.textBox}>
                                <Content/>
                            </div>
                        </div>

                        <div className={styles.midLeftBottom}>
                            <h1>Meet the instructor</h1>
                            <div className={styles.instructorInfo}>
                                <div className={styles.firstRow}>
                                    <img src={instructorImg2} alt="instructor-2"/>
                                    <Content/>
                                </div>
                                <div className={styles.secondRow}>
                                    <img src={instructorImg1} alt="instructor-1"/>
                                    <Content/>
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
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer2} alt="second-reviewer"/>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer3} alt="third-reviewer"/>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <img src={reviewer4} alt="fourth-reviewer"/>
                                <div className={styles.textBox}>
                                    <Content/>
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