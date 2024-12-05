'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const categories = [
  { id: 1, name: 'Wands', description: '/shop/wands' },
  { id: 2, name: 'Potions', description: '/shop/potions' },
  { id: 3, name: 'Books', description: '/shop/books' },
  { id: 4, name: 'Brooms', description: '/shop/brooms' },
  { id: 5, name: 'Robes', description: '/shop/robes' },
]

const TabBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`

const TabBarElement = styled.li`
  border-radius: 0px;
  box-shadow: none;
  position: relative;
  &.active {
    font-weight: bold;
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ffd700;
    border-radius: 2px;
  }
`

const CategoryTabBar: React.FC<{ categoryFromURL: string }> = ({
  categoryFromURL,
}) => {
  const activeTab = categories.findIndex(
    (cat) => cat.name.toLowerCase() === categoryFromURL,
  )

  return (
    <TabBar>
      {categories.map((category, index) => {
        return (
          <TabBarElement
            className={activeTab === index ? 'active' : ''}
            key={category.id}
          >
            <Link href={`/shop/${category.name.toLowerCase()}`}>
              {category.name}
            </Link>
          </TabBarElement>
        )
      })}
    </TabBar>
  )
}

export default CategoryTabBar
