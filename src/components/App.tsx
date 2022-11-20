import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TrainConnections } from './TrainConnections';
import { TrainInfo } from '../types';

type Props = {
  trains: TrainInfo[];
};

export const App = ({ trains }: Props) => {
  return (
    <div className="App">
      <Header />
      <TrainConnections trains={trains} />
      <Footer />
    </div>
  );
};

export default App;
