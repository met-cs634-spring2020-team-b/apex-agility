import React from 'react';

import routes from '../../../constants/routes';

import ServiceTile from './ServiceTile';
import styles from './OurServicesSection.module.css';

const OurPartnersSection = () => {
  return (
    <section className={styles.our_services_section}>
      <h3>Our Services</h3>
      <div className={styles.tiles_row}>
        <ServiceTile
          src="#"
          title="Maturity Assessment"
          url={routes.ASSESSMENT}
        >
          Apex agile experts can perform an Agile Maturity Assessment for your company.&nbsp;&nbsp;
          We thoroughly study your business organization and measure how the software development practices you follow conform to the&nbsp;
          <a
            href="http://agilemanifesto.org/principles.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Agile Manifesto's 12 Agile Principles
          </a>
          .
        </ServiceTile>
        <ServiceTile
          src="#"
          title="Training"
          url={routes.COURSES}
        >
          Apex coursework will thoroughly prepare you for Agile certification.  Having worked side-by-side&nbsp;
          with the three elite certification agencies, we know just what you will need to gain certification&nbsp;
          from the three important certification organizations&nbsp;
          <a
            href="http://scaledagile.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SAFe
          </a>
          ,&nbsp;
          <a
            href="https://www.scrum.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Scrum.org
          </a>
          , and&nbsp;
          <a
            href="http://scrumalliance.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Scrum Alliance
          </a>
          .
        </ServiceTile>
        <ServiceTile
          src="#"
          title="Coaching"
          url={routes.COACHING}
        >
          Working one on one with your own technology leaders, Apex experts share our&nbsp;
          decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs.
        </ServiceTile>
      </div>
    </section>
  )
};

export default OurPartnersSection;
