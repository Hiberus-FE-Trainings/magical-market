'use client'

import React, { useState } from 'react'
import { ItemsList } from '../items-list/items-list'

export type ItemsOnList = { title: string; image: JSX.Element }[]

const mockedItemsOnList = [
  {
    title: 'Title 1',
    image: <img src="https://example.com/image.jpg" alt="img" />,
  },
  {
    title: 'Title 2',
    image: <img src="https://example.com/image.jpg" alt="img" />,
  },
  {
    title: 'Title 3',
    image: <img src="https://example.com/image.jpg" alt="img" />,
  },
  {
    title: 'Title 4',
    image: <img src="https://example.com/image.jpg" alt="img" />,
  },
  {
    title: 'Title 5',
    image: <img src="https://example.com/image.jpg" alt="img" />,
  },
]

export const ItemsContainer = () => {
  //TODO: fetch items

  const [selectedItem, setSelectedItem] = useState<number>(0)

  const handleItemTitleClick = (index: number) => {
    setSelectedItem(index)
  }

  console.log(selectedItem)

  return (
    <div className="itemsContainer">
      <ItemsList
        itemsOnList={mockedItemsOnList}
        handleItemTitleClick={handleItemTitleClick}
      />
      <div>Product Item {selectedItem + 1}</div>
    </div>
  )
}
