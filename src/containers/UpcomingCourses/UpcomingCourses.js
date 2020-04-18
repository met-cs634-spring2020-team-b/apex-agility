import React, {useState} from "react";
import styles from "./Upcoming.module.css";
import Button from "../../components/Button";
import Calendar from 'react-calendar';
import BannerImage from '../../components/BannerImage';
import bannerImage from './assests/bg_upcoming_course.jpg';
import {courses} from './courses';
import {monthToString} from './conversion'

import 'react-calendar/dist/Calendar.css';

const UpcomingCourses = () => {
    const AvailableCourses = ({month, day, title, location, instructor}) => {
        return(
            <div className={styles.description}>
                 <ul className={styles.date}>
                    <li>Month: {month}</li>
                    <li>Day: {day}</li>     
                </ul>
                <ul className={styles.courseInfo}>
                    <li>Course Name: {title}</li>
                    <li>Location: {location}</li>
                    <li>Instructor Name: {instructor}</li>
                 </ul>
            </div>
        );
    }
    const [monthId, setMonthId] = useState(new Date().getMonth());

    const maxCourseMonthId = courses.reduce((max, c) => c.monthId > max ? c.monthId : max, courses[0].monthId);
    const minCourseMonthId = courses.reduce((min, c) => c.monthId < min ? c.monthId : min, courses[0].monthId);
   
    let coursesToShow = [];
    
    if (monthId > maxCourseMonthId || monthId < minCourseMonthId) {
        coursesToShow = courses.slice(0, 3).map(() => {
            return (
                <AvailableCourses
                    month="TBD"
                    day="TBD"
                    title="TBD"
                    location="TBD"
                    instructor="TBD" 
                />
            );
        })
    }
    else { 
        coursesToShow = courses.map((course) => {
            if (monthId === course.monthId) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
                        title={course.title}
                        location={course.location}
                        instructor={course.instructor} 
                    />
                );
            }
            else {
                return false;
            }
            
        })
    }

    return(
        <div className={styles.container}>
            <BannerImage src={bannerImage} alt ="#"/>
            <div className={styles.bottomContainer}>
                <div className={styles.firstRow}>
                    <div className={styles.dummy}></div>
                    <div className={styles.title}>
                        <h2>Upcoming Courses</h2>
                    </div>
                    <div className={styles.calender}>
                       <Calendar onActiveStartDateChange={({activeStartDate}) => setMonthId(activeStartDate.getMonth())}/>
                    </div>

                </div>
                <div className={styles.secondRow}>
                    <div className={styles.filters}>
                        <div className={styles.title}>
                            <h2>Filter Events</h2>
                        </div>
                        <div className={styles.filterTypes}>
                            <a href="#0">All Courses</a>
                            <a href="#0">All Course Type</a>
                            <a href="#0">Calender</a>
                            <a href="#0">All Countries</a>
                            <a href="#0">City</a>
                            <a href="#0">All Trainers</a>
                            <a href="#0">All Partners</a>
                            
                            <div className={styles.clearBtn}>
                                <Button>Clear Filters</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.courses} >
                        {coursesToShow}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingCourses;