import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import ServersStatus from './components/servers-status/servers-status'
import ModuleSign from './components/module/signature/module-sign'
import ModuleVerify from './components/module/signature/module-verify'
import ModuleSkipChain from './components/module/skipchain/module-skipchain'

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row noGutters>
            <Col xs="auto">
              <ModuleSign/>
            </Col>
            <Col xs="auto">
              <ModuleVerify/>
            </Col>
            <Col>
              <ModuleSkipChain/>
            </Col>
            <Col xs="12">
              <ServersStatus/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
