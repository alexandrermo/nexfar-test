import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCart />
      </Route>
    </Switch>
  );
};

export default Routes;
