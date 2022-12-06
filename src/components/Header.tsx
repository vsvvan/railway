import shoppingCart from '../images/shopping_cart_black_24dp 1.png';
import React from 'react';
import Logo from '../images/Logo-header.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <div className="header">
        <Button onClick={() => navigate('/railway/')}>
          <img className="App-logo" src={Logo} alt="Logo" />
        </Button>
        <div className="HeaderContainer">
          <span className="LanguageChange"> SK/EN </span>
          <div className="IconLayout">
            <img className="CartIcon" src={shoppingCart} alt="" />
          </div>
          <div>
            <button className="SignButton" type="button">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
