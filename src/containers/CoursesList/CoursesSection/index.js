import React from 'react';

import Course from '../Course';

import styles from './CoursesSection.module.css';

const CoursesSection = ({ sectionCourses, sectionHeader }) => {
  return (
    <section
      className={styles.courses_section}
      id={sectionHeader}
    >
      <h2>{sectionHeader}</h2>
      <div>
        {
          sectionCourses.map((course) => {
            if(course.display) {
              return (
                <Course
                  key={`${sectionHeader}-${course.id}`}
                  course={course}
                />
              )
            }
            else {
              return false;
            }
          })
        }
      </div>
    </section>
  )
};

export default CoursesSection;
