import React from 'react';
/* Components */
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
/* Proptypes */
import { bool } from 'prop-types';
/* Styles */
import './App.css';

function App({isLoggedIn}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: bool,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default App;
