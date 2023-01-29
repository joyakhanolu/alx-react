import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul style={{position: 'relative'}}>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
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
  width: '.7rem',
  height: '.7rem',
}

export default Notifications;
