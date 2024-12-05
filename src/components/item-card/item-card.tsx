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

const CardPrice = styled.div`
  font-size: 1.5rem;
  margin: 10px 0;
`
const CardDescription = styled.div`
  display: flex;
`

export const ItemCard = () => {
  return (
    <div>
      <CardConversion>
        <Image
          alt=""
          src="https://magical-market-images.s3.eu-central-1.amazonaws.com/images/creatures/phoenix.webp"
          width={150}
          height={150}
        />
        <CardButtonDiv>
          <CardPrice>1000</CardPrice>
          <button>Buy</button>
        </CardButtonDiv>
      </CardConversion>
      <CardDescription>
        <h3>Phoenix</h3>
        <p>Magical creature</p>
        <h5>Albus Dumbledore</h5>
      </CardDescription>
    </div>
  )
}
