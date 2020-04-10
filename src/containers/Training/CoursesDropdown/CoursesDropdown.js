import React from 'react';
import styles from '../Training.module.css';
import { Link } from 'react-router-dom';

const CourseDropdown = () => {
    return(
        <div className={styles.dropDownContainer}>
            <div className={styles.dropdown}>
                <h3>Course Type</h3>
                <div className={styles.dropdownContent}>
                    <Link>Leadership</Link>
                    <Link>Scaled Agile 5.0</Link>
                    <Link>Scrum.org</Link>
                    <Link>Scrum Alliance</Link>
                    <Link>PMI</Link>
                    <Link>Corporate Training</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <h3>Certifying body</h3>
                <div className={styles.dropdownContent}>
                    <Link>Scrum Alliance</Link>
                    <Link>SAFe</Link>
                    <Link>Scrum.org</Link>
                    <Link>PMI</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <h3>Role</h3>
                <div className={styles.dropdownContent}>
                    <Link>Product owner</Link>
                    <Link>Scrum Master</Link>
                    <Link>Business Analyst</Link>
                    <Link>Developer</Link>
                    <Link>QA</Link>
                </div>
            </div>
        </div>
    );
}

export default CourseDropdown;