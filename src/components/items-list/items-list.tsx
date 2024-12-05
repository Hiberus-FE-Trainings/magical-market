import React from 'react'
import { ItemsOnList } from '../items-container/items-container'

export const ItemsList = ({
  itemsOnList,
  handleItemTitleClick,
}: {
  itemsOnList: ItemsOnList
  handleItemTitleClick: (index: number) => void
}) => {
  return (
    <div className="itemsList">
      <ul>
        {itemsOnList.map((item, index) => (
          <li key={index} onClick={() => handleItemTitleClick(index)}>
            <div
              style={{
                height: '50px',
                width: '50px',
                display: 'inline',
                margin: '10px',
              }}
            >
              {item.image}
            </div>
            <p style={{ flexGrow: '1', textAlign: 'center' }}>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
