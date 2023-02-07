import  React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="Footer">
			<i>Copyright {getFullYear()} - {getFooterCopy()}</i>
    </footer>
  );
}

export default Footer;
