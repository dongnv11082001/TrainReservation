import React, {useState} from 'react'
import styled from 'styled-components'
import 'antd/lib/select/style/css'
import {FormWrapper} from '../../../GlobalStyle'
export const Shipping: React.FC = () => {
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
      <Text>Delivery method</Text>
      <Delivery onClick={handlePickUpClick} checked={pickUpClick}>
        <div>
          {pickUpClick ? (
            <img src={'https://cassiopeia.store/svgs/radio-checked.svg'} alt={''}/>
          ) : (
            <img src={'https://cassiopeia.store/svgs/radio-unchecked.svg'} alt={''}/>
          )}
        </div>
        <div className='text'>
          <span>Pick up</span>
          <span>Today, pick up is available in 2 stores</span>
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
          <span>Courier</span>
          <span>About 2 days</span>
        </div>
      </Delivery>
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
