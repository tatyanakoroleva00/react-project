import React from 'react'

export default function Categories({chooseCategory}) {

    const categories = [
        {
            key: 'all', 
            name: 'all',
        },
        {
            key: 'chairs', 
            name: 'chairs',
        },
        {
            key: 'tables', 
            name: 'tables',
        },
        {
            key: 'sofas', 
            name: 'sofas',
        },
        {
            key: 'lamps', 
            name: 'lamps',
        },

    ];

  return (
    <div className='categories'>
        {categories.map(el => (
            <div onClick={()=>chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
    </div>
  )
}
