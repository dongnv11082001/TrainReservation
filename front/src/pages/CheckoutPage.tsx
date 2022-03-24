import {Breadcrumb} from 'antd'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {CommonLayout, FlexBox} from '../components/modules/ComonLayout'
import {Contact} from '../components/pages/checkout/Contact'
import {Payment} from '../components/pages/checkout/Payment'
import {Shipping} from '../components/pages/checkout/Shipping'
import {Submit} from '../components/pages/checkout/Submit'
import {Order} from '../components/pages/checkout/Order'
import {Banner} from '../components/pages/home/layout'
import {useLoading} from '../context/loadingContext'
import bannerBackground from '../asserts/images/banner.jpg'
import { useProgress } from '../hooks/useProgress'

export const CheckoutPage = () => {
  const [stages, setStages] = useState(0)
  const {buttonProgress} = useProgress(stages)

  const {setLoading} = useLoading()

  const handleNextClick = () => {
    setStages(stages + 1)
    setLoading(true)
  }

  const handlePrevClick = () => {
    setStages(stages - 1)
    setLoading(true)
  }

  return (
    <CommonLayout>
      <Banner style={{height: '35vh'}} background={bannerBackground}/>
      <Wrapper>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Checkout</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Title>Checkout</Title>
          </div>
          <FormContainer>
            {stages === 0 && <Contact/>}
            {stages === 1 && <Shipping/>}
            {stages === 2 && <Payment/>}
            {stages === 3 && <Submit/>}
          </FormContainer>
          <ButtonWrapper>
            <div>
              {buttonProgress && (
                <PrevButton
                  onClick={handlePrevClick}
                  disabled={stages <= 0}
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
                  <Link to={'/'} style={{color: '#000'}}>
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
            </div>
          </ButtonWrapper> 
        </div>
        <Order/>
      </Wrapper>
    </CommonLayout>
  )
}
const Wrapper = styled(FlexBox)`
  margin-bottom: 50px;
  padding: 3rem 5%;
  align-items: initial;
  gap: 4rem;
  height: fit-content;
`
const FormContainer = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 2em;
  border-radius: 10px;
`
const Title = styled.h1`
  margin: 20px 0 40px 0;
  font-weight: 500;
  font-size: 32px;
  color: #466a81;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  background-color: #1890ff;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`
