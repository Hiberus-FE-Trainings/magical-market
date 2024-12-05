'use client'

import Image from 'next/image'
import styled from 'styled-components'

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

export type ItemCardProps = {
  image: string
  price: number
  title: string
  description: string
  seller: string
}

export const ItemCard = ({
  image,
  price,
  title,
  description,
  seller,
}: ItemCardProps) => {
  return (
    <div>
      <CardConversion>
        <Image alt="item-image" src={image} width={150} height={150} />
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
        <CardTitle>{title}</CardTitle>
        <CardDescriptionText>{description}</CardDescriptionText>
        <CardAuthor>{seller}</CardAuthor>
      </CardDescription>
    </div>
  )
}
