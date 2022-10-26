import React from 'react';
import shoppingCart from './images/shopping_cart_black_24dp 1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img className="App-logo" alt="Logo" />
            <span className="LanguageChange"> SK/EN </span>
            <div className="IconLayout">
                <img className="CartIcon" src={shoppingCart} />
            </div>
            <div>
                <button className="SignButton" type="button">Sign in</button>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
