import React from 'react';
import { Link } from 'react-router-dom';

import styles from './OurPartnersSection.module.css';

const OurPartnersSection = () => {
  return (
    <section className={styles.our_partners_section}>
      <h3>Our Partners</h3>
      <div>
        <Link to={"#"}>SAFe</Link>
        <Link to={"#"}>Scrum Alliance</Link>
        <Link to={"#"}>Scrum.org</Link>
      </div>
    </section>
  )
};

export default OurPartnersSection;
