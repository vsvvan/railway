import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { HeaderMainPage } from './HeaderMainPage';
import { TrainConnections } from './TrainConnections';
import { PassengerInformation, TrainInfo, UserData } from '../types';
import Checkout from '../containers/Checkout';
import { Order } from './Order';
import SearchBar from '../containers/SearchBar';
import { ConInfo } from '../types';
import { Summary } from './Summary';
import { InformationBlock } from './InformationBlock';
import { Provider } from 'react-redux';
import { store } from '../store/store';

type Props = {
  trains: TrainInfo[];
  userData: UserData;
  chosenTrain: TrainInfo;
  searchInfo: any;
  setChosenTrain: (train: TrainInfo) => void;
  setPrice: (price: number) => void;
};

export const App = ({
  trains,
  userData,
  searchInfo,
  chosenTrain,
  setChosenTrain,
  setPrice,
}: Props) => {
  const [connections, setConnections] = useState<ConInfo>({
    from: '',
    to: '',
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
  });
  const { passengerInformation } = userData;

  useEffect(() => {
    const price =
      passengerInformation
        .map((pass: PassengerInformation) => {
          if (chosenTrain) {
            if (pass.discount === 0) {
              return +chosenTrain.price;
            } else if (pass.discount === 1) {
              return +chosenTrain.price / 2;
            }
          } else return 0;
        })
        .reduce((a, b) => a! + b!, 0) || 0;
    console.log({ price });
    setPrice(price);
  }, [passengerInformation, chosenTrain]);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <HeaderMainPage />
          <Routes>
            <Route
              path="/railway/"
              element={
                <>
                  <SearchBar
                    isMain={true}
                    searchInfo={searchInfo}
                    setConnections={setConnections}
                  />
                  <InformationBlock />
                </>
              }
            />
            <Route
              path="/connections"
              element={
                <>
                  <SearchBar
                    isMain={false}
                    searchInfo={searchInfo}
                    setConnections={setConnections}
                  />
                  <TrainConnections
                    trains={trains}
                    searchInfo={searchInfo}
                    setChosenTrain={setChosenTrain}
                  />
                </>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/checkout-order"
              element={
                <Order
                  trainInfo={chosenTrain}
                  userData={userData}
                  searchInfo={searchInfo}
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary trainInfo={chosenTrain} searchInfo={searchInfo} />
              }
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
