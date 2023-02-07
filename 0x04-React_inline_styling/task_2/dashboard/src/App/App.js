import  React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardKeys = this.keyboardKeys.bind(this);
  }

  keyboardKeys(x) {
    if (x.key === 'h' && x.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
        <div className={css(styles.App)}>
          <Header />
        </div>
        <div className={css(styles.AppBody)}>
          {
            isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )
          }
        </div>
        <BodySection title="News from the School">
          <p>
            Somebody that you loved.
          </p>
        </BodySection>
        <div className={css(styles.AppFooter)}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0
  },

  AppBody: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '60vh',
    margin: 0,
    padding: 0
  },

  AppFooter: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
    height: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '4px solid #e1354b'
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;
