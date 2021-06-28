import React from 'react';
import { Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './functional-components/header';
import Nav from './functional-components/nav';
import Routes from './functional-components/routes';
import { DataAppProvider } from './contexts/data-app';
import { ColRoutes, ContainerGrow, DivAllScreen, Row100 } from './styled';

const App: React.FC = () => {
  let shoppingCard = localStorage.getItem('shoppingCard');
  if (shoppingCard) {
    shoppingCard = JSON.parse(shoppingCard);
  }

  return (
    <DataAppProvider shoppingCardPersisted={shoppingCard as any}>
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
};

export default App;
