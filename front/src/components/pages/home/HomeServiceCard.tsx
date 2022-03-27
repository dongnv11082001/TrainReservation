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
      <div className="image-wrapper">
        <img src={image} alt=""/>
      </div>
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
  width: 250px;
  padding: 20px;
  border-radius: 1rem;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  height: 240px;
  .image-wrapper{
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 768px){
    .image-wrapper{
      display: none;
    }
    width: 90%;
    height: fit-content;
  }
`
const StyledTitle = styled(Title)`
    font-size: 0.9rem !important;
`
export const StyledText = styled(Text)`
    font-size: 0.9rem !important;
    display: block;
`