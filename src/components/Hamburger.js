import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../App';

const Hamburger = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <Col xs={4} sm={4} className="hidden-md hidden-lg hidden-xl hamburger-container">
          <FontAwesomeIcon id="mobile-hamburger" onClick={context.handleMainMenuClick} icon={(context.mainMenuOpen===false)?"bars":"times"} />
        </Col>
      )}
    </AppContext.Consumer>
  )
};



export default Hamburger;
