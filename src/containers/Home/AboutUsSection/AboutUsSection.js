import React from 'react';
import { Link } from 'react-router-dom';

import about_us_img from '../../../assets/about_banner.png';
import Button from '../../../components/Button';
import routes from '../../../constants/routes';

import styles from './AboutUsSection.module.css';

const AboutUsSection = () => {
  return (
    <section className={styles.about_us_section}>
      <img src={about_us_img} alt="About Us" />
      <p>
        Apex is a boutique Agile consultancy with decades of software development experience.&nbsp;&nbsp;
        We grew up in the era of structured design methodologies, adapted our learning to the rapid&nbsp;
        development approaches, and graduated to Agile.  Wherever you are in your software evolution, we are there to help in your journey.
      </p>
      <div className={styles.button_container}>
        <Button>
          <Link
            to={routes.ABOUT}
          >
            Who We Are
          </Link>
        </Button>
        <Button>
          <Link
            to={routes.COURSES}
          >
            What We Do
          </Link>
        </Button>
        <Button>
          <Link
            to={routes.CONTACT_US}
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </section>
  )
};

export default AboutUsSection;
