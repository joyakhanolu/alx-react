import React from 'react';
/* Components */
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
/* Proptypes */
import { bool } from 'prop-types';
/* Styles */
import './App.css';

function App({isLoggedIn}) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
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
