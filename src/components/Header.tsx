import shoppingCart from '../images/shopping_cart_black_24dp 1.png';
import React from 'react';
import Logo from '../images/Logo-header.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <div className="HeaderMainPage">

        <Button onClick={() => navigate('/railway/')}>
          <img className="App-logo" src={Logo} alt="Logo" />
        </Button>
        
        <div className='Menu-bar'>
          <ul>
          <li><a href="#">Ticket Purchase</a>
            <div className='Sub-menu-1'>
            <ul>
              <li><a href="#">Security rules</a></li>
              <li><a href="#">Purchase of one-way travel ticket</a></li>
              <li><a href="#">Purchase of Motorail ticket </a></li>
              <li><a href="#">Cancellation online</a></li>
              <li><a href="#">Conditions of payments</a></li>
              <li><a href="#">Purchase of season ticket - Tatry</a></li>
              <li><a href="#">Online sale terms and conditions </a></li>             
            </ul>
            </div>
        </li>
        <li>Timetable</li>
        <li>Tickets and Offers</li>
        <li> <a href="#">Sevices</a>
        <div className='Sub-menu-1'>
        <ul>
              <li><a href="#">Security rules</a></li>
              <li><a href="#">Purchase of one-way travel ticket</a></li>
              <li><a href="#">Cancellation online</a></li>
              <li><a href="#">Conditions of payments</a></li>
              <li><a href="#">Security rules</a></li>
              <li><a href="#">Online sale terms and conditions </a></li>
            </ul>
        </div>
          </li>
        <li>Career</li>
        <li>About us</li>
        </ul>
        </div>
        <div className="HeaderContainer">
          <span className="LanguageChange"> SK/EN </span>
          <div className="IconLayout">
            <img className="CartIcon" src={shoppingCart} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
