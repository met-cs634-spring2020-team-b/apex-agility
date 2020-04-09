import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../../constants/routes';

import styles from '../Training.module.css';
import courseList from '../courseList';

const Corporate = ()=> {
    const {vsm, spm, piw, iaa, pmw, tb, psk} = courseList;
    return (
        <div className={styles.courses}>
            <h3>Corporate Training</h3>
            <div className={styles.corporate}>
                <Link to={{pathname: routes.COURSE_NO_ID + vsm.id}}>
                    <img src={vsm.logo} alt={vsm.label}/>
                    <p>VALUE STREAM WORKSHOP</p>
                </Link>

                <Link to={{pathname: routes.COURSE_NO_ID + spm.id}}>
                    <img src={spm.logo} alt={spm.label}/>
                    <p>SAFe PORTFOLIO MANAGEMENT</p>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + piw.id}}>
                    <img src={piw.logo} alt={piw.label}/>
                    <p>PROGRAM INCREMENT WORKSHOP</p>
                </Link>

                <Link to={{pathname: routes.COURSE_NO_ID + iaa.id}}>
                    <img src={iaa.logo} alt={iaa.label}/>
                    <p>INSPECT AND ADAPT</p>
                </Link>
                <Link to={{pathname: routes.COURSE_NO_ID + pmw.id}}>
                    <img src={pmw.logo} alt={pmw.label}/>
                    <p>PRODUCT MANAGEMENT WORKSHOP</p>
                </Link>

                <Link to={{pathname: routes.COURSE_NO_ID + tb.id}}>
                    <img src={tb.logo} alt={tb.label}/>
                    <p>TEAM BUILDING</p>
                </Link>

                <Link to={{pathname: routes.COURSE_NO_ID + psk.id}}>
                    <img src={psk.logo} alt={psk.label}/>
                    <p>CUSTOMIZED SCRUM/KANBAN WORKSHOP</p>
                </Link>
                        
            </div>

        </div>
    );
}

export default Corporate;