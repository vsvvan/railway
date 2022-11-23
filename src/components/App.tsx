import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TrainConnections } from './TrainConnections';
import { TrainInfo } from '../types';
import { Checkout } from './Checkout';
import { Order } from './Order';
import { SearchBar } from "./SearchBar";
import ConInfo from "../ConInfo";

type Props = {
  trains: TrainInfo[];
};

export const App = ({ trains }: Props) => {
  const [Connections, setConnections] = useState<ConInfo>({
		from: '',
		to: '',
		month: 0,
		day: 0,
		hour: 0,
		minute: 0
	})
  
  return (
    <div className="App">
      <Header />
      {SearchBar({dispatch: setConnections})}
			{(Connections.from.length > 0 && Connections.to.length > 0) &&
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
      }
      <Footer />
    </div>
  );
};

export default App;
