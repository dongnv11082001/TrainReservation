import styled from 'styled-components'
import React from 'react'

const Progress: React.FC = () => {
  return (
    <Wrapper>
      <ProgressContainer className={'progress'}>
        <span className={'circle'}>1</span>
        <span className={'text'}>Contacts</span>
        <div className={'line'}></div>
      </ProgressContainer>
      <ProgressContainer className={'progress'}>
        <span className={'circle'}>2</span>
        <span className={'text'}>Shipping</span>
        <div className={'line'}></div>
      </ProgressContainer>
      <ProgressContainer className={'progress'}>
        <span className={'circle'}>3</span>
        <span className={'text'}>Payment</span>
      </ProgressContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
  width: 480px;
  font-size: 16px;
`

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .line {
    width: 60px;
    height: 2px;
    background-color: #f0f0f5;
    margin: 0 8px;
  }
  & .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #333;
    margin-right: 8px;
  }
  & .text {
    margin-right: 8px;
  }
`

export default Progress
