import { Breadcrumb, Progress } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Contact } from '../components/pages/checkout/Contact'
import { Payment } from '../components/pages/checkout/Payment'
import { Shipping } from '../components/pages/checkout/Shipping'
import { Submit } from '../components/pages/checkout/Submit'

export const CheckoutPage = () => {
  const [progress, setProgress] = useState('contacts')
  const [buttonProgress, setButtonProgress] = useState('Shipping')

  const handleNextClick = () => {
    if (progress === 'contacts') {
      setProgress('shipping')
      setButtonProgress('Payment')
    }
    if (progress === 'shipping') {
      setProgress('payment')
      setButtonProgress('Submit')
    }
    if (progress === 'payment') {
      setProgress('submit')
    }
  }
  
  const handlePrevClick = () => {
    if (progress === 'shipping') {
      setProgress('contacts')
      setButtonProgress('Shipping')
    }
    if (progress === 'payment') {
      setProgress('shipping')
      setButtonProgress('Payment')
    }
    if (progress === 'submit') {
      setProgress('payment')
      setButtonProgress('Submit')
    }
  }

  return (
    <Wrapper>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Title>Checkout</Title>
        </div>
        <Progress />
        {progress === 'contacts' && <Contact />}
        {progress === 'shipping' && <Shipping />}
        {progress === 'payment' && <Payment />}
        {progress === 'submit' && <Submit />}
        <ButtonWrapper>
          <div>
            {buttonProgress && (
              <PrevButton
                onClick={handlePrevClick}
                disabled={progress === 'contacts'}
              >
                <img
                  src={
                    'https://cassiopeia.store/svgs/line-left-arrow-black.svg'
                  }
                  alt=''
                />
                Back step
              </PrevButton>
            )}
            {!buttonProgress && (
              <PrevButton>
                <Link to={'/'} style={{ color: '#000' }}>
                  Come back homepage
                </Link>
                <img
                  src={
                    'https://cassiopeia.store/svgs/line-right-arrow-black.svg'
                  }
                  alt=''
                />
              </PrevButton>
            )}
          </div>
          <div>
            {buttonProgress && (
              <NextButton onClick={handleNextClick}>
                <span>{buttonProgress}</span>
                <img
                  src={'https://cassiopeia.store/svgs/line-right-arrow.svg'}
                  alt=''
                />
              </NextButton>
            )}
            {buttonProgress === '' && <></>}
          </div>
        </ButtonWrapper>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin: 20px 0 40px 0;
  font-weight: 500;
  font-size: 32px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 435px;
  font-size: 16px;
  & button img {
    margin: 0 10px;
  }
`

const PrevButton = styled.button`
  border: none;
  height: 46px;
  cursor: pointer;
  background: transparent;
`

const NextButton = styled.button`
  border: none;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`
