import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul style={{position: 'relative'}}>
        <NotificationItem type='default' value="New course available" />
        <NotificationItem type='urgent' value="New resume available" />
        <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
      </ul>
      <button onClick={() => buttonClick()} aria-label="Close" style={buttonStyle}>
        <img alt="close icon" src={close_icon} style={imageStyle}/>
      </button>
    </div>
  );
}

const buttonClick = () => {
  console.log('Close button has been clicked');
}

const buttonStyle = {
  position: 'absolute',
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
}

const imageStyle = {
  width: '1rem',
  height: '1rem',
}

export default Notifications;
