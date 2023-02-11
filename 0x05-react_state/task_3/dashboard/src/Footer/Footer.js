import  React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from "../App/AppContext";

function Footer() {
  return (
    <AppContext.Consumer>
      {
        (context) => {
          return (
            <footer className="Footer">
              <p>
                <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
              </p>
              {context.user.isLoggedIn && <a href='#'>Contact us</a>}
            </footer>
          );
        }
      }
    </AppContext.Consumer>
  );
}

export default Footer;