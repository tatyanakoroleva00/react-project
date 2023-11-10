import React from "react";

export default function Item({ item, onAdd, onShowItem }) {
  return (
    <div className="item">
      <img
        src={item.img}
        alt={item.title}
        onClick={() => onShowItem(item)}
      />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price.toFixed(2)}$</b>
      <div className="add-to-cart" onClick={() => onAdd({ item })}>
        +
      </div>
    </div>
  );
}
