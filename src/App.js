import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import {listedItems} from './assets/data/listedItems';
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App () {
  let [orders, setOrders] = useState([]);
  let [currentItems, setCurrentItems] = useState(listedItems);
  let [showFullItem, setShowFullItem] = useState(false);
  let [fullItem, setFullItem] = useState();
  const addToOrderHandler = ({item}) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      setOrders(prevState => {
      return [item, ...prevState];
    })
    }
  };
  const deleteOrderHandler = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  }

  const chooseCategory = (category) => {
    if (category !== 'all') {
      setCurrentItems(listedItems.filter(el => el.category === category))
      } else {
        setCurrentItems(listedItems);
      }
    };

    const onShowItemHandler = (item) => {
      setShowFullItem(showFullItem => !showFullItem);
      setFullItem(item);
      console.log(fullItem);
    };
  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrderHandler}/>
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} onAdd={addToOrderHandler} onShowItem={onShowItemHandler} />
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrderHandler} onShowItem={onShowItemHandler}/>}
      <Footer/>
    </div>
  )
}