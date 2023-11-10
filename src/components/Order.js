import React from "react";
import {FaTrash} from 'react-icons/fa';
export default function Order({item, onDelete}) {


  return (
    <div className="item">
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash onClick={() => onDelete(item.id)} className="delete-item" />
    </div>
  );
}
