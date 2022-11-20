import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TrainConnections } from './TrainConnections';
import { TrainInfo } from '../types';
import { Checkout } from './Checkout';
import { Order } from './Order';

type Props = {
  trains: TrainInfo[];
};

export const App = ({ trains }: Props) => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<TrainConnections trains={trains} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/checkout-order"
            element={<Order trainInfo={trains[0]} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
