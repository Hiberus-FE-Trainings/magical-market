'use client'

import React, { useState } from 'react'
import { ItemsList } from '../items-list/items-list'
import { ItemCard } from '../item-card/item-card'
import styled from 'styled-components'
import { Item } from '@/magical-shop/domain/items'

const ItemsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: 65vh;
  width: 50vw;
  padding: 0px 30px;
  box-sizing: border-box;
  border-radius: 80px;
  border: 2px solid #ffd700;
  margin: 16px 20px;
`

export const ItemsContainer = ({ items }: { items: Item[] }) => {
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(items[0])

  const handleItemTitleClick = (item: Item) => {
    setSelectedItem(item)
  }

  return (
    <ItemsContainerStyled>
      <ItemsList
        itemsOnList={items}
        handleItemTitleClick={handleItemTitleClick}
      />
      {selectedItem && (
        <div>
          <ItemCard {...selectedItem} />
        </div>
      )}
    </ItemsContainerStyled>
  )
}
