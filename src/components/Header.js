import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hamburger from './Hamburger';
import { AppContext } from '../App';
import { CSSTransition } from 'react-transition-group';

const Header = (props) => {

  return (
    <AppContext.Consumer>
      {(context) => (
      <div>
      {/* Primary Nav */}
        <div className="header">
          <Row id="nav-row">
            <Col xs={8} sm={8} md={6}>
              <h2 className="site-title">{props.title}</h2>
            </Col>
            <Col xs={6} sm={6} md={6} className="hidden-xs hidden-sm">
              <ul>
              {context.menuItems.map((menuItems, i) => {
                return <li
                  key={i + 1}
                  id={`desktop-nav-${i + 1}`}
                  >
                    <a
                      className="desktop-nav-link"
                      href={menuItems.link}
                      onClick={() => context.handleNavigation(menuItems.link,menuItems.title,i)}
                      onMouseEnter={() => context.handleNavMouseEnter(i)}
                      onMouseLeave={() => context.handleNavMouseLeave(i)}
                    >
                      {menuItems.title}
                    </a>
                  </li>;
                })}
              </ul>
            </Col>
            <Hamburger/>
          </Row>
        </div>
        {/* Mobile Menu */}
        <div>
          <CSSTransition
            in={context.mainMenuOpen}
            timeout={500}
            classNames="menu-animate"
            unmountOnExit
          >
            <Row id="mobile-menu-row" className="hidden-md hidden-lg hidden-xl">
              <Col xs={12}>
                <ul>
                  {context.menuItems.map((menuItems, i) => {
                    return <li key={i}><a href={menuItems.link} onClick={() => context.handleNavigation(menuItems.link,menuItems.title)}>{menuItems.title}</a></li>;
                  })}
                </ul>
              </Col>
            </Row>
          </CSSTransition>
        </div>
      </div>
    )}
  </AppContext.Consumer>
  );
};

export default Header;
