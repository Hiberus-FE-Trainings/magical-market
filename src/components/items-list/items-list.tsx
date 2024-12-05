import React from 'react'
import { ItemsOnList } from '../items-container/items-container'
import styled from 'styled-components'

const ItemsListStyled = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ItemsList = ({
  itemsOnList,
  handleItemTitleClick,
}: {
  itemsOnList: ItemsOnList
  handleItemTitleClick: (index: number) => void
}) => {
  return (
    <ItemsListStyled className="itemsList">
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
            <p className="title">{item.title}</p>
          </li>
        ))}
      </ul>
    </ItemsListStyled>
  )
}
