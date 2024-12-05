'use client'

import { Item } from '@/magical-shop/domain/items'
import Image from 'next/image'
import styled from 'styled-components'
import { generateImageURL } from '../generate-image-url/generate-image-url'

const CardContainer = styled.div`
  padding-top: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const CardConversion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`

const CardPrice = styled.p`
  font-size: 1.7rem;
  margin: 10px 0;
`
const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CardTitle = styled.h3`
  font-size: 2rem;
  margin: 10px 0;
`
const CardDescriptionText = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`

const CardAuthor = styled.h5`
  font-size: 0.8rem;
`

export type ItemCardProps = Item

export const ItemCard = ({
  image,
  price,
  title,
  description,
  sellerName,
}: ItemCardProps) => {
  return (
    <CardContainer>
      <CardConversion>
        <Image
          alt="item-image"
          src={generateImageURL(image)}
          width={200}
          height={200}
        />
        <CardButtonDiv>
          <CardPrice>
            {price}{' '}
            <span>
              <Image
                alt="money-bag"
                src="/money-bag.png"
                width={20}
                height={20}
              />
            </span>
          </CardPrice>
          <button>Buy</button>
        </CardButtonDiv>
      </CardConversion>
      <CardDescription>
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
          <CardAuthor>{sellerName}</CardAuthor>
        </CardTitleWrapper>
        <CardDescriptionText>{description}</CardDescriptionText>
      </CardDescription>
    </CardContainer>
  )
}
