import React from 'react';
import styles from './Assessment.module.css';
import routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import content from './Content';
import Button from '../../components/Button'

import leadership from './assets/leadership.png';
import organization from './assets/organization.png';
import portfolio from './assets/portfolio.png';
import program from './assets/program.png';
import individual from './assets/individual.png';
import team from './assets/team.png';


const Assessment = () => {
    return(
        <div className={styles.assessmentContainer}>
            <div className={styles.top}>
                <p>Background image</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bFirst}>
                    <div className={styles.title}>
                        <h2>Maturity Assessment</h2>
                    </div>
                    <div className={styles.contactUsBtn}>
                        <Button>
                            <Link to={routes.CONTACT_US}>Contact Us</Link>
                        </Button>
                    </div>
                </div>
                <div className={styles.bSecond}>
                    <h2>Why Assessment?</h2>
                    <p>{content.intro_p1}</p>
                    <p></p>
                    <p>{content.intro_p2}</p>
                    <p></p>
                    <p>{content.intro_p3}</p>
                </div>
                <div className={styles.bThird}>
                    <h2> What are the different types of assessment?</h2>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Leadership assessment:</h3>
                            <p>{content.leadership}</p>
                        </div>
                        <div className={styles.logo}>
                        <img src={leadership} alt="leadership-logo"/>
                        </div>
                        
                    </div>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Organization assessment:</h3>
                            <p>{content.organization}</p>
                        </div>

                        <div className={styles.logo}>
                            <img src={organization} alt="organization-logo"/>
                        </div>   
                    </div>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Porfolio assessment:</h3>
                            <p>{content.portfolio}</p>
                        </div>

                        <div className={styles.logo}>
                            <img src={portfolio} alt="portfolio-logo"/>
                        </div>
                    </div>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Program assessment:</h3>
                            <p>{content.program}</p>
                        </div>

                        <div className={styles.logo}>
                            <img src={program} alt="program-logo"/>
                        </div>
                    </div>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Team assessment:</h3>
                            <p>{content.team}</p>
                        </div>

                        <div className={styles.logo}>
                            <img src={team} alt="team-logo"/>
                        </div>
                    </div>
                    <div className={styles.assessment}>
                        <div className={styles.content}>
                            <h3>Individual assessment:</h3>
                            <p>{content.individual}</p>
                        </div>

                        <div className={styles.logo}>
                            <img src={individual} alt="individual-logo"/>
                        </div>
                    </div>
                </div>

                <div className={styles.bFourth}>
                    <div className={styles.contactUsBtn}>
                        <Button>
                            <Link to={routes.CONTACT_US}> Contact Us</Link>
                        </Button>
                    </div>

                </div>

            </div>
        </div>
        

    );
}

export default Assessment;