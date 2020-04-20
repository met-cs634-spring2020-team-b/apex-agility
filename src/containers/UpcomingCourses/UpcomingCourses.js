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
    const AvailableCourses = ({month, day, title, city, country, instructor, partner, type}) => {
        return(
            <div className={styles.description}>
                 <ul className={styles.date}>
                    <li><b>MONTH:</b> {month}</li>
                    <li><b>DAY:</b> {day}</li>     
                </ul>
                <ul className={styles.courseInfo}>
                    <li><b>COURSE NAME:</b> {title}</li>
                    <li><b>LOCATION:</b> {city}, {country}</li>
                    <li><b>INSTRUCTOR NAME:</b> {instructor}</li>
                 </ul>
            </div>
        );
    }
    const [monthId, setMonthId] = useState(new Date().getMonth());

    const maxCourseMonthId = courses.reduce((max, c) => c.monthId > max ? c.monthId : max, courses[0].monthId);
    const minCourseMonthId = courses.reduce((min, c) => c.monthId < min ? c.monthId : min, courses[0].monthId);

    let coursesToShow = [];

    {/* Filter Rule: If you click on any of the filter events, it resets all the other counts to 0 */ }
    
    {/* Calendar count */}
    const [calendarCount, setCalendarCount] = useState(0);

    {/* All courses count */}
    const [allCount, setAllCount] = useState(0);

    {/* City count: 0:All,  Even:Boston, Odd:London */}
    const [cityCount, setCityCount] = useState(0);

    {/* Country count: 0:All,  Even:USA, Odd:Nepal */}
    const [countryCount, setCountryCount] = useState(0);

    {/* Course type count: 0:All, Even: ?  */}
    const [typeCount, setTypeCount] = useState(0);

    {/* Partners count: 0:All, 1: scrum.org, 2: scrumalliance.org, 3: SAFe */}
    const [partnerCount, setPartnerCount] = useState(0);

    {/* Trainers count: 0:All, Even:Raj, Odd: Dave West */}
    const [trainerCount, setTrainerCount] = useState(0);

    {/* Only 1 filter count should be non-zero. Return which one */}
    function whichFilterIsNonZero() {
        if (cityCount     > 0) return 1;
        if (countryCount  > 0) return 2;
        if (typeCount     > 0) return 3;
        if (partnerCount  > 0) return 4;
        if (trainerCount  > 0) return 5;
        if (allCount      > 0) return 6;
        if (calendarCount > 0) return 7;
	return 0;
    }

    function clearAllFilters() {
		setCityCount(0);
		setCountryCount(0);
		setTypeCount(0);
		setPartnerCount(0);
		setTrainerCount(0);
		setAllCount(0);
		setCalendarCount(0);
    }


    function doCityCount() {
        const anyNonZero = whichFilterIsNonZero();
		const saveCnt = cityCount;

		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
        if ((anyNonZero > 0) && (anyNonZero != 1)) {  
        	setCityCount(1);  {/* start with first filter */}
        }
		else setCityCount((saveCnt %2) +1); {/*2 choices */}				
    }
    function doCountryCount() {
        const anyNonZero = whichFilterIsNonZero();
		const saveCnt = countryCount;

		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
        if ((anyNonZero > 0) && (anyNonZero != 2)) { 
        	setCountryCount(1);  {/* start with first filter */}
        }
		else setCountryCount((saveCnt %2) +1);
    }
    function doTrainerCount() {
        const anyNonZero = whichFilterIsNonZero();
		const saveCnt = trainerCount;

		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
        if ((anyNonZero > 0) && (anyNonZero != 5)) { 
        	setTrainerCount(1);  {/* start with first filter */}
        }
		else setTrainerCount(saveCnt+1);
    }
    function doAllCount() {
		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
		setAllCount(1);
    }
    function doCalendarCount() {
    	{/* Filter using the monthly calendar */}
    	clearAllFilters();
    }
    function doTypeCount() {
        const anyNonZero = whichFilterIsNonZero();
		const saveCnt = typeCount;

		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
        if ((anyNonZero > 0) && (anyNonZero != 3)) { 
        	setTypeCount(1);  {/* start with first filter */}
        }
		else setTypeCount((saveCnt %6) +1); {/* 6 types: Leadership, SAFe, ... */}
    }
    function doPartnerCount() {
        const anyNonZero = whichFilterIsNonZero();
		const saveCnt = partnerCount;

		{/* Make sure we reset if there are any other filters currently active */}
		clearAllFilters();
        if ((anyNonZero > 0) && (anyNonZero != 4)) { 
        	setPartnerCount(1);  {/* start with first filter */}
        }
		else setPartnerCount((saveCnt %3) +1); {/*3 partners: Scrum.org, Scrum Alliance, SAFe */}
    }
    
    
    if (monthId > maxCourseMonthId || monthId < minCourseMonthId) {
        coursesToShow = courses.slice(0, 3).map(() => {
            return (
                <AvailableCourses
                    month="TBD"
                    day="TBD"
                    title="TBD"
                    city="TBD"
		            country="TBD"
                    instructor="TBD" 
                    partner="TBD"
                    type="TBD"
                />
            );
        })
    }
    else { 
        coursesToShow = courses.map((course) => {

            {/* Only at most one of the filter counts should be non-zero */}
            const filterNonZero = whichFilterIsNonZero();

	    {/* Country filtering and display happens here */}
	    if (filterNonZero == 2) {
	    }

	    


	    {/* No filters currently engaged */}
	    if (filterNonZero == 0) {
	    
			{/* cityCount:0 is default to show all cities, odd number for Boston, even for London  */}
            if ((cityCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
		                title={course.title}
                        city={course.city}
		                country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if (monthId === course.monthId) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}
		}
		
	    else if (filterNonZero == 1) {
			{/* City filter */}

			{/* cityCount:0 is default to show all cities, odd number for Boston, even for London  */}
            if ((cityCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if ((cityCount == 1) && (course.city == 'Boston') && (monthId === course.monthId)) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}

            else if ((cityCount == 2) && (course.city == 'London') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		
	    }

	    else if (filterNonZero == 2) {
			{/* Country filter */}

			{/* countryCount:0 is default to show all countries, odd number for USA, even for UK  */}
            if ((countryCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if ((countryCount == 1) && (course.country == 'USA') && (monthId === course.monthId)) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}

            else if ((countryCount == 2) && (course.country == 'UK') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		
	    }


	    else if (filterNonZero == 4) {
			{/* Partner filter */}

			{/* partnerCount:0 is default to show all partners, 1:Scrum.org, 2:Scrum Alliance, 3:SAFe */}
            if ((partnerCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if ((partnerCount ==1) && (course.partner == 'Scrum.org') && (monthId === course.monthId)) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}

            else if ((partnerCount ==2) && (course.partner == 'Scrum Alliance') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		
            
            else if ((partnerCount ==3) && (course.partner == 'SAFe') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		            
	    }

	    else if (filterNonZero == 5) {
			{/* Trainer filter */}

			{/* trainerCount:0 is default to show all countries, odd number for USA, even for UK  */}
            if ((trainerCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if ((trainerCount %2 ==1) && (course.instructor == 'Raj Heda') && (monthId === course.monthId)) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}

            else if ((trainerCount %2 ==0) && (course.instructor == 'Dave West') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		
	    }
	    
	    else if (filterNonZero == 6) {
			{/* All courses filter */}

			{/* Show all courses regardless of calendar */}
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
	
	    }	    

	    else if (filterNonZero == 3) {
			{/* Type filter */}

			{/* typeCount:0 is default to show all types, 1:Leadership, 2:SAFe, 3:Scrum.org, 4:Scrum Alliance, 5: PMI, 6:Corporate  */}
            if ((typeCount == 0) && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }

			else if ((typeCount == 1) && (course.type == 'Scrum.org') && (monthId === course.monthId)) {
				const month = monthToString(monthId);
				return(
					<AvailableCourses
						month={month}
						day={course.day}
						title={course.title}
						city={course.city}
						country={course.country}
						instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
					/>
				);
			}

            else if ((typeCount == 2) && (course.type == 'Scrum Alliance') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		

            else if ((typeCount == 3) && (course.type == 'SAFe') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }			    

            else if ((typeCount == 4) && (course.type == 'Leadership') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		

            else if ((typeCount == 5) && (course.type == 'PMI') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		

            else if ((typeCount == 6) && (course.type == 'Corporate') && (monthId === course.monthId)) {
                const month = monthToString(monthId);
                return(
                    <AvailableCourses
                        month={month}
                        day={course.day}
						title={course.title}
                        city={course.city}
						country={course.country}
                        instructor={course.instructor} 
                        partner={course.partner}
                        type={course.type}
                    />
                );
            }		
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
                            <h2><center>Filter Events</center></h2>
                        </div>
                        <div className={styles.filterTypes}>
                            {/*<a href="#0">All Courses</a>*/}
                            {/*<a href="#0">All Course Type</a>*/}
                            {/*<a href="#0">Calender</a>*/}
                            {/*<a href="#0">All Countries</a>*/}
                            {/* <a href="#0">City</a> */}
                            {/*<a href="#0">All Trainers</a>*/}
                            {/*<a href="#0">All Partners</a>*/}

                            <div className={styles.filterTypes}>
								<Button onClick={() => doAllCount()}>All Courses</Button>
							</div>
                            
                            <div className={styles.filterTypes}>
								<Button onClick={() => doTypeCount()}>All Course Types</Button>
							</div>
                            
                            <div className={styles.filterTypes}>
								<Button onClick={() => doCalendarCount()}>Calendar</Button>
							</div>
                            
                            <div className={styles.filterTypes}>
								<Button onClick={() => doCountryCount()}>All Countries</Button>
							</div>
                            
                            <div className={styles.filterTypes}>
								<Button onClick={() => doCityCount()}>City</Button>
							</div>
	    
                            <div className={styles.filterTypes}>
								<Button onClick={() => doTrainerCount()}>All Trainers</Button>
							</div>
	    
                            <div className={styles.filterTypes}>
								<Button onClick={() => doPartnerCount()}>All Partners</Button>
							</div>
	    
                            <div className={styles.filterTypes}>
                                <br/> <br/> <br/>
								<Button onClick={() => clearAllFilters()}>Clear Filters</Button>
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
