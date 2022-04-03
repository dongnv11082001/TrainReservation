import {Breadcrumb, Typography} from 'antd'
import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {CheckCircleFilled} from '@ant-design/icons'
import {CommonLayout, FlexBox} from '../components/modules/ComonLayout'
import {Contact} from '../components/pages/checkout/Contact'
import {Payment} from '../components/pages/checkout/Payment'
import {Confirm} from '../components/pages/checkout/Confirm'
import {Order} from '../components/pages/checkout/Order'
import {Banner} from '../components/pages/home/layout'
import {useLoading} from '../context/loadingContext'
import bannerBackground from '../asserts/images/banner.jpg'
import {useProgress} from '../hooks/useProgress'
import Buttons from '../components/pages/checkout/Buttons'
import {useCartTickets} from '../context/cartContext'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'
import {useOffer} from '../context/offerContext'
import {useResult} from '../context/searchContext'
import {Offer} from '../types/offer'

const {Text} = Typography

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const [stages, setStages] = useState(0)
  const {buttonProgress} = useProgress(stages)
  const {setLoading} = useLoading()
  const {userOffer, setUserOffer} = useOffer()
  const {inCartTickets} = useCartTickets()
  const {contextRoundTrip, passengers} = useResult()

  const validateEmptyForm = () => {
    if (userOffer?.user) {
      if (stages === 0
        && userOffer.user.userName
        && userOffer.user.phoneNumber
        && userOffer.user.gender
      ) return false
      else if (stages === 1 && userOffer.user.paymentMethod || stages === 2) return false
    }
    return true
  }

  const handleEnterUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUserOffer({
    ...userOffer,
    user: {...userOffer?.user, userName: e.target.value}
  })

  const handleEnterPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => setUserOffer({
    ...userOffer,
    user: {...userOffer?.user, phoneNumber: e.target.value}
  })

  const handleSelectGender = (e: React.ChangeEvent<HTMLInputElement>) => setUserOffer({
    ...userOffer,
    user: {...userOffer?.user, gender: e.target.value as 'male' | 'female'}
  })

  const chooseOnlinePayment = () => {
    setUserOffer({...userOffer, user: {...userOffer?.user, paymentMethod: 'online'}})
  }

  const chooseCheckinPayment = () => {
    setUserOffer({...userOffer, user: {...userOffer?.user, paymentMethod: 'onCheckin'}})
  }

  const handleNextClick = async () => {
    setStages(stages + 1)
    setLoading(true)
    if (stages === 2 && userOffer) {
      const choosingTickets = inCartTickets.map(ticket => `${ticket.id}`)
      const offerStatus = userOffer.user.paymentMethod === 'online' ? 'paid' : 'pending'
      const submitOffer: Offer = {
        ...userOffer,
        isRoundTrip: contextRoundTrip,
        passengers: passengers,
        createdAt: new Date,
        status: offerStatus,
        tickets: choosingTickets
      }
      console.log(submitOffer)
      await axios.post<Offer>('', submitOffer)
    }
  }

  const handlePrevClick = () => {
    if (stages <= 0) navigate(-1)
    setStages(stages - 1)
    setLoading(true)
  }

  useEffect(() => {
    if (!inCartTickets || inCartTickets.length === 0) {
      navigate('/')
    }
  }, [])

  if (!inCartTickets || inCartTickets.length === 0) return <LoadingOverlay/>

  return (
    <CommonLayout>
      <Banner style={{height: '35vh'}} background={bannerBackground}/>
      <Wrapper>
        <InformationFill>
          <Breadcrumb>
            <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Checkout</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Title>Checkout</Title>
          </div>
          <FormContainer style={{width: `${stages >= 3 && 600}`}}>
            {stages === 0 &&
                <Contact
                  userInfor={userOffer?.user}
                  onChangeUser={handleEnterUsername}
                  onChangePhoneNumber={handleEnterPhoneNumber}
                  onChangeGender={handleSelectGender}/>
            }
            {stages === 1 &&
                <Payment userOffer={userOffer} onCheckin={chooseCheckinPayment} onOnlineMethod={chooseOnlinePayment}/>
            }
            {stages === 2 &&
                <Confirm userInfor={userOffer?.user}/>
            }
            {stages === 3 &&
                <Submit>
                  <CheckCircleFilled style={{color: '#52c41a', fontSize: '2rem'}}/>
                  <Text>Submit Successfully</Text>
                </Submit>
            }
          </FormContainer>
          <Buttons
            validate={validateEmptyForm}
            buttonProgress={buttonProgress}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        </InformationFill>
        {stages < 3 && <Order incartTickets={inCartTickets}/>}
      </Wrapper>
    </CommonLayout>
  )
}
const Wrapper = styled(FlexBox)`
  margin-bottom: 50px;
  padding: 3rem 10%;
  gap: 7rem;
  align-items: initial;
  height: fit-content;
  flex-wrap: wrap;
`
const InformationFill = styled.div`
  flex: 2 1 20rem;
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
const Submit = styled(FlexBox)`
  justify-content: initial;
  gap: 10px;
  padding: 20px 0;
  font-size: 1.3rem;
`