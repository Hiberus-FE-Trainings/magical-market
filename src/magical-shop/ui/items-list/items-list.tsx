import { Item } from '@/magical-shop/domain/items'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { generateImageURL } from '../generate-image-url/generate-image-url'

const ItemsListStyled = styled.div`
  border-right: 2px solid #ffd700;
  padding: 16px;
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ItemsList = ({
  itemsOnList,
  handleItemTitleClick,
}: {
  itemsOnList: Item[]
  handleItemTitleClick: (item: Item) => void
}) => {
  return (
    <ItemsListStyled className="itemsList">
      <ul>
        {itemsOnList.map((item) => (
          <li key={item.id} onClick={() => handleItemTitleClick(item)}>
            <div
              style={{
                height: '50px',
                width: '50px',
                display: 'inline',
                margin: '10px',
              }}
            >
              <Image
                alt="item-image"
                src={generateImageURL(item.image)}
                width={70}
                height={70}
              />
            </div>
            <p className="title" style={{ marginLeft: '3rem' }}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </ItemsListStyled>
  )
}
