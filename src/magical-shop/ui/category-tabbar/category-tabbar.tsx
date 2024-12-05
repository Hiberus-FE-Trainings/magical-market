'use client'

import { Category } from '@/magical-shop/domain/catergory'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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

const CategoryTabBar: React.FC<{
  categoryFromURL: string
  categories: Category[]
}> = ({ categoryFromURL, categories }) => {
  const activeTab = categories.findIndex(
    (cat) => cat.toLowerCase() === categoryFromURL,
  )

  return (
    <TabBar>
      {categories.map((category, index) => {
        return (
          <TabBarElement
            className={activeTab === index ? 'active' : ''}
            key={category}
          >
            <Link href={`/shop/${category.toLowerCase()}`}>{category}</Link>
          </TabBarElement>
        )
      })}
    </TabBar>
  )
}

export default CategoryTabBar
