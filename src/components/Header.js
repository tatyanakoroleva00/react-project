import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import Order from "./Order";

const showOrders = (orders, onDelete) => {
  let sum = 0;
  orders.forEach(el => sum += el.price);
  return (
    <div>
      {orders.map((elem) => (
        <Order onDelete={onDelete} key={elem.id} item={elem} />
      ))}
      <p className="sum">Total: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>No goods in the basket</h2>
    </div>
  );
};

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">DOMUM SALATIUM</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contact us</li>
          <li>Log in</li>
        </ul>
        <BsBasket
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
