import React from 'react'
import {Typography} from 'antd'
import styled from 'styled-components'

type CardProps = {
  image: string
  title: string
  content: string
};

const {Title, Text} = Typography

export const HomeServiceCard: React.FC<CardProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <CardWrapper>
      <img src={image} width="75px" height="75px" alt=""/>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{content}</StyledText>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:6px;
  flex-direction: column;
  max-width: 300px;
  padding: 20px;
  border-radius: 1rem;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`
const StyledTitle = styled(Title)`
    font-size: 0.9rem !important;
`
export const StyledText = styled(Text)`
    font-size: 0.9rem !important;
    display: block;
`