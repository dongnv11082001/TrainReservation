import React from 'react'
import {Typography} from 'antd'
import styled from 'styled-components'

type CardProps = {
    image: string;
    title: string;
    content: string;
};

const {Title, Text} = Typography

export const HomeServiceCard: React.FC<CardProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <CardWrapper>
      <img src={image} width="100px" height="100px" alt=""/>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
