import React, { useEffect, useState } from 'react';

import { courses } from './courses';
import { corporate_courses } from './corporate_courses';

import BannerImage from '../../components/BannerImage';
import Button from '../../components/Button';

import bannerImage from './assets/Training.jpg';
import CoursesSection from './CoursesSection';

import styles from './CoursesList.module.css';

const CoursesList = () => {
  const [displayedCourses, setDisplayedCourses] = useState(courses);
  const [leadershipCourses, setLeadershipCourses] = useState([]);
  const [scaledAgileCourses, setScaledAgileCourses] = useState([]);
  const [scrumDotOrgCourses, setScrumDotOrgCourses] = useState([]);
  const [scrumAllianceCourses, setScrumAllianceCourses] = useState([]);
  const [pmiCourses, setPmiCourses] = useState([]);

  useEffect(() => {
    let tempLeadershipCourses = [];
    let tempScaledAgileCourses = [];
    let tempScrumDotOrgCourses = [];
    let tempScrumAllianceCourses = [];
    let tempPmiCourses = [];

    displayedCourses.forEach((course) => {
      const { certifyingBody, type } = course;

      if (type.includes('leadership')) {
        tempLeadershipCourses.push(course);
      }

      switch (certifyingBody || type) {
        case 'Scaled Agile': {
          tempScaledAgileCourses.push(course);
          break;
        }
        case 'Scrum.org': {
          tempScrumDotOrgCourses.push(course);
          break;
        }
        case 'Scrum Alliance': {
          tempScrumAllianceCourses.push(course);
          break;
        }
        case 'Project Management Institute': {
          tempPmiCourses.push(course);
          break;
        }
        default: {
          break;
        }
      }
    });

    setLeadershipCourses(tempLeadershipCourses);
    setScaledAgileCourses(tempScaledAgileCourses);
    setScrumDotOrgCourses(tempScrumDotOrgCourses);
    setScrumAllianceCourses(tempScrumAllianceCourses);
    setPmiCourses(tempPmiCourses);
  }, [displayedCourses]);

  const handleClearFilters = () => {

    courses.forEach((course) => {
      if (!course.showDefault) {
        course.display = false;
      }
    });
    
    setDisplayedCourses(courses);
    const selects = document.getElementsByTagName('select');
    for(let select of selects) {
      select.selectedIndex = 0;
    }
  };

  const handleFilterBySelection = (selection) => {
    const id = selection.currentTarget.id;
    const value = document.getElementById(id).value;

    if (id && value === "") {
      courses.forEach((course) => {
        if (!course.showDefault) {
          course.display = false;
        }
      });

      setDisplayedCourses(courses);
    } else {
      const filteredCourses = displayedCourses.filter((course) => value === course[id].toLowerCase());

      filteredCourses.forEach((course) => course.display = true);
      setDisplayedCourses(filteredCourses);
    }
  };

  return (
    <>
      <BannerImage src={bannerImage} alt="Training page banner image" />
      <section className={styles.filters_row}>
        <span>
          <label htmlFor="type">Filter by</label>
          <select
            id="type"
            onChange={handleFilterBySelection}
          >
            <option value="">Type:</option>
            <option value="leadership">Leadership</option>
            <option value="scaled agile">Scaled Agile</option>
            <option value="scrum alliance">Scrum Alliance</option>
            <option value="scrum.org">Scrum.org</option>
            <option value="project management institute">Project Management Institute</option>
          </select>
        </span>
        <span>
          <label htmlFor="certifyingBody">Filter by</label>
          <select
            id="certifyingBody"
            onChange={handleFilterBySelection}
          >
            <option value="">Certifying Body:</option>
            <option value="scaled agile">Scaled Agile</option>
            <option value="scrum alliance">Scrum Alliance</option>
            <option value="scrum.org">Scrum.org</option>
            <option value="project management institute">Project Management Institute</option>
          </select>
        </span>
        <span>
          <label htmlFor="role">Filter by</label>
          <select
            id="role"
            onChange={handleFilterBySelection}
          >
            <option value="">Role:</option>
            <option value="developer">Developer</option>
            <option value="scrum master">Scrum Master</option>
            <option value="project manager">Project Manager</option>
            <option value="product owner">Product Owner</option>
          </select>
        </span>
        <Button
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </section>
      {
        leadershipCourses.length > 0 &&
          <CoursesSection
            sectionCourses={leadershipCourses}
            sectionHeader="Leadership"
          />
      }
      {
        scaledAgileCourses.length > 0 &&
          <CoursesSection
            sectionCourses={scaledAgileCourses}
            sectionHeader="Scaled Agile 5.0"
          />
      }
      {
        scrumDotOrgCourses.length > 0 &&
          <CoursesSection
            sectionCourses={scrumDotOrgCourses}
            sectionHeader="Scrum.org"
          />
      }
      {
        scrumAllianceCourses.length > 0 &&
          <CoursesSection
            sectionCourses={scrumAllianceCourses}
            sectionHeader="Scrum Alliance"
          />
      }
      {
        pmiCourses.length > 0 &&
          <CoursesSection
            sectionCourses={pmiCourses}
            sectionHeader="PMI"
          />
      }
      <section className={styles.corporate_training}>
        <h2>Corporate Training</h2>
        <div>
        {
          corporate_courses.map((course) => {
            return (
              <div
                key={course.id}
              >
                <img src={course.img} alt={course.title} />
                <h2>{course.title}</h2>
              </div>
            )
          })
        }
        </div>
      </section>
    </>
  )
};

export default CoursesList;
