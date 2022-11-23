import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TrainConnections } from './TrainConnections';
import { TrainInfo } from '../types';
import Checkout from '../containers/Checkout';
import { Order } from './Order';

type Props = {
  trains: TrainInfo[];
  setChosenTrain: (train: TrainInfo) => void;
};

export const App = ({ trains, setChosenTrain }: Props) => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TrainConnections
                trains={trains}
                setChosenTrain={setChosenTrain}
              />
            }
          />
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
