import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

type CardProps = {
  image: string
  title: string
  content: string
}

const { Title, Text } = Typography

export const HomeServiceCard: React.FC<CardProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <CardWrapper>
      <img src={image} width='50px' height='50px' alt='' />
      <Title
        style={{
          fontSize: '16px',
          borderTop: '1px solid #333',
          paddingTop: '12px',
        }}
      >
        {title}
      </Title>
      <Text>{content}</Text>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 360px;
  text-align: center;
  padding: 60px 0;

  & img {
    margin-bottom: 12px;
  }
`
