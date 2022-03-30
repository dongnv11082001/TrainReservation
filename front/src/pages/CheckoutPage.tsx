import {Breadcrumb} from 'antd'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {CommonLayout, FlexBox} from '../components/modules/ComonLayout'
import {Contact} from '../components/pages/checkout/Contact'
import {Payment} from '../components/pages/checkout/Payment'
import {Submit} from '../components/pages/checkout/Submit'
import {Order} from '../components/pages/checkout/Order'
import {Banner} from '../components/pages/home/layout'
import {useLoading} from '../context/loadingContext'
import bannerBackground from '../asserts/images/banner.jpg'
import {useProgress} from '../hooks/useProgress'
import Button from '../components/pages/checkout/Button'
import {useCartTickets} from '../context/cartContext'

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const [stages, setStages] = useState(0)
  const {buttonProgress} = useProgress(stages)
  const {setLoading} = useLoading()
  const {inCartTickets} = useCartTickets()

  const handleNextClick = () => {
    setStages(stages + 1)
    setLoading(true)
  }

  const handlePrevClick = () => {
    if (stages <= 0) navigate(-1)
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
            {stages === 1 && <Payment/>}
            {stages === 2 && <Submit/>}
          </FormContainer>
          <Button buttonProgress={buttonProgress} onNextClick={handleNextClick} onPrevClick={handlePrevClick}/>
        </div>
        <Order incartTickets={inCartTickets}/>
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