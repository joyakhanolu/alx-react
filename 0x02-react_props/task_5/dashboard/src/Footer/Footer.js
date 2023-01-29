import React, { Fragment } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';


function Footer() {
  return(
    <Fragment>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </Fragment>
  );
}

export default Footer;
