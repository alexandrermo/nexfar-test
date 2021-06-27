import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './functional-components/header';
import Nav from './functional-components/nav';
import Routes from './functional-components/routes';
import { DataAppProvider } from './contexts/data-app';
import { ColRoutes, ContainerGrow, DivAllScreen, Row100 } from './styled';

function App() {
  return (
    <DataAppProvider>
      <Router>
        <DivAllScreen>
          <Header />
          <ContainerGrow className="container-custom">
            <Row100>
              <Col xs="auto" className="pr-0">
                <Nav />
              </Col>
              <ColRoutes>
                <Routes />
              </ColRoutes>
            </Row100>
          </ContainerGrow>
        </DivAllScreen>
      </Router>
    </DataAppProvider>
  );
}

export default App;
