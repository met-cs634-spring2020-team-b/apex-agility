import React from 'react';
import { Route } from 'react-router-dom'

import routes from './constants/routes';

import About from './containers/About';
import Assessment from "./containers/Assessment";
import Coaching from './containers/Coaching';
import ContactUs from './containers/ContactUs';
import CourseMain from "./containers/CourseMain";
import Home from './containers/Home';
import Register from './containers/Register';
import TermsAndConditions from "./containers/TermsAndConditions";
import ThankYou from "./containers/ThankYou";
import UpcomingCourses from "./containers/UpcomingCourses";

import GlobalFooter from './components/GlobalFooter';
import GlobalHeader from './components/GlobalHeader';

const App = () => (
  <>
    <GlobalHeader />
    <main>
      <Route path={routes.ABOUT} component={About} />
      <Route path={routes.ASSESSMENT} component={Assessment} />
      <Route path={routes.COACHING} component={Coaching} />
      <Route path={routes.CONTACT_US} component={ContactUs} />
      <Route path={routes.COURSES} component={CourseMain} />
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.REGISTER} component={Register} />
      <Route path={routes.TERMS_AND_CONDITIONS} component={TermsAndConditions} />
      <Route path={routes.THANK_YOU} component={ThankYou} />
      <Route path={routes.UPCOMING_COURSES} component={UpcomingCourses} />
    </main>
    <GlobalFooter />
  </>
);

export default App;
