import React from 'react'
import Item from './Item'
export default function Items({items, onAdd, onShowItem}) {
  return (
    <main>
        {items.map(item => (
            <Item key={item.id} onShowItem={onShowItem} item={item} onAdd={onAdd}/>
        ))}
    </main>
    
  )
}
