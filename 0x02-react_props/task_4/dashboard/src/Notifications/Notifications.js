import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { bool } from 'prop-types';

function Notifications({ displayDrawer }) {
  const buttonClick = () => {
    console.log('Close button has been clicked');
  }

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    outline: 'none',
    width: '100%',
  }

  const imageStyle = {
    width: '.7rem',
    height: '.7rem',
  }
  return (
    <>
    <div className="menuItem">Your notifications</div>
    {displayDrawer ?
      <div className="Notifications">
        <button onClick={() => buttonClick()} aria-label="Close" style={buttonStyle}>
          <img alt="close icon" src={close_icon} style={imageStyle}/>
        </button>
        <p>Here is the list of notifications</p>
        <ul style={{position: 'relative'}}>
          <NotificationItem type='default' value="New course available" />
          <NotificationItem type='urgent' value="New resume available" />
          <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
        </ul>
      </div>
      : <></>
    }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
