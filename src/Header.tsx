import shoppingCart from "./images/shopping_cart_black_24dp 1.png";
import React from "react";

export const Header = () => (<header className="App-header">
    <div className="header">
        <img className="App-logo" alt="Logo"/>
        <span className="LanguageChange"> SK/EN </span>
        <div className="IconLayout">
            <img className="CartIcon" src={shoppingCart}/>
        </div>
        <div>
            <button className="SignButton" type="button">Sign in</button>
        </div>
    </div>
</header>);
