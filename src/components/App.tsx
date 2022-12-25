import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TrainConnections } from './TrainConnections';
import { TrainInfo, UserData } from '../types';
import Checkout from '../containers/Checkout';
import { Order } from './Order';
import SearchBar from '../containers/SearchBar';
import { ConInfo } from '../types';
import { Summary } from './Summary';

type Props = {
  trains: TrainInfo[];
  userData: UserData;
  setChosenTrain: (train: TrainInfo) => void;
};

export const App = ({ trains, userData, setChosenTrain }: Props) => {
  const [connections, setConnections] = useState<ConInfo>({
    from: '',
    to: '',
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/railway/"
            element={<SearchBar dispatch={setConnections} />}
          />
          <Route
            path="/connections"
            element={
              <TrainConnections
                trains={trains}
                setChosenTrain={setChosenTrain}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout trainInfo={trains[0]} />}
          />
          <Route
            path="/checkout-order"
            element={<Order trainInfo={trains[0]} userData={userData} />}
          />
          <Route path="/summary" element={<Summary trainInfo={trains[0]} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
