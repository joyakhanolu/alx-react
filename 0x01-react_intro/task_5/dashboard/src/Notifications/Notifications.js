import React from 'react'
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

const Notifications = function () {
  return (
    <div
      className='Notifications'
      style={{
        display: 'flex-box',
        position: 'absolute',
        top: '10px',
        right: '8px',
        width: '95%',
        height: '7%',
      }}
    >
      <p
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '-70px',
          left: '-3%',
        }}
      >
        Here is the list of notifications
      </p>
      <button
        type='button'
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '10px',
          right: '10px',
          border: '0',
        }}
      >
      </button>
      <ul
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '30%',
          left: '10px',
        }}
      >
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent'>
          <div
            dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
