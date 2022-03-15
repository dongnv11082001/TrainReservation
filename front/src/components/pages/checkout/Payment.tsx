import React, { useState } from 'react'
import styled from 'styled-components'
import {FormWrapper} from '../../../GlobalStyle'

const creditCards = [
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-visa_xbmobu.png',
    value: '',
  },
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-master_hk7o4r.png',
    value: '',
  },
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-american_wfurcp.png',
    value: '',
  },
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-jcb_qb5auz.png',
    value: '',
  },
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-discover_jhud7f.png',
    value: '',
  },
]

const onlineGateWays = [
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-gateway-paypal_hp0gag.png',
    value: '',
  },
  {
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-stripe_odvihl.png',
    value: '',
  },
]

export const Payment: React.FC = () => {
  const [pickUpClick, setPickUpClick] = useState(false)
  const [courierClick, setCourierClick] = useState(true)

  const handlePickUpClick = () => {
    setCourierClick(false)
    setPickUpClick(true)
  }

  const handleCourierClick = () => {
    setPickUpClick(false)
    setCourierClick(true)
  }

  return (
    <FormWrapper>
      <Text>Payment method</Text>
      <Delivery onClick={handlePickUpClick} checked={pickUpClick}>
        <div>
          {pickUpClick ? (
            <img src={'https://cassiopeia.store/svgs/radio-checked.svg'} alt={''}/>
          ) : (
            <img src={'https://cassiopeia.store/svgs/radio-unchecked.svg'} alt={''}/>
          )}
        </div>
        <div className='text'>
          <span>Payment on Delivery</span>
        </div>
      </Delivery>
      <Delivery onClick={handleCourierClick} checked={courierClick}>
        <div>
          {courierClick ? (
            <img src={'https://cassiopeia.store/svgs/radio-checked.svg'} alt={''}/>
          ) : (
            <img src={'https://cassiopeia.store/svgs/radio-unchecked.svg'} alt={''}/>
          )}
        </div>
        <div className='text'>
          <span>Online Payment</span>
        </div>
      </Delivery>
      {courierClick && (
        <>
          <Text>Credit Cards</Text>
          <Container>
            <div className='credit-card-center'>
              <div className='online-payment-grid'>
                {creditCards.map((card, i) => (
                  <div key={i} className='online-payment-card'>
                    <img src={card.image} alt={''}/>
                  </div>
                ))}
              </div>
            </div>
            <div className='gateway-center'>
              <Text>Online payment gateways</Text>
              <div className='online-payment-grid'>
                {onlineGateWays.map((card) => (
                  <div key={card.image} className='online-payment-card'>
                    <img src={card.image} alt={''}/>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </>
      )}
    </FormWrapper>
  )
}

const Delivery = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.checked ? '#000' : '#f0f0f5')};
  margin-bottom: 20px;
  cursor: pointer;
  user-select: none;
  padding: 20px;
  & .text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`

const Text = styled.div`
  margin: 20px 0;
  font-size: 16px;
`

const Container = styled.div`
  margin: 2rem 0;
  width: 480px;
  .online-payment-grid {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    .online-payment-card {
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 0 8px 8px 0;
      img {
        width: 150px;
      }
    }
  }
`
