import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AppContext } from '../App';

const Body = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="body">
          <Row id="nav-row">
            <Col>
              {props.page}
            </Col>
          </Row>
        </div>
      )}
    </AppContext.Consumer>
  )
};



export default Body;
