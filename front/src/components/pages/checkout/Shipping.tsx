import { Select } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import 'antd/lib/select/style/css'
import { CaretDownFilled } from '@ant-design/icons/lib/icons'

const availableAddress = [
  {
    address:
      '120 Nguyen Thai Hoc Street, Pham Ngu Lao Ward, Hoang Mai district, Ha Noi',
  },
  { address: '233 Cong Hoa Street, 13 Ward, Tan Binh district, HCM city' },
]

export const Shipping: React.FC = () => {
  const [pickUpClick, setPickUpClick] = useState(false)
  const [courierClick, setCourierClick] = useState(true)
  const [address, setAddress] = useState('')

  const { Option } = Select

  const handlePickUpClick = () => {
    setCourierClick(false)
    setPickUpClick(true)
  }

  const handleCourierClick = () => {
    setPickUpClick(false)
    setCourierClick(true)
  }

  return (
    <div>
      <Text>Delivery method</Text>
      <Delivery onClick={handlePickUpClick} checked={pickUpClick}>
        <div>
          {pickUpClick ? (
            <img src={'https://cassiopeia.store/svgs/radio-checked.svg'} />
          ) : (
            <img src={'https://cassiopeia.store/svgs/radio-unchecked.svg'} />
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
            <img src={'https://cassiopeia.store/svgs/radio-checked.svg'} />
          ) : (
            <img src={'https://cassiopeia.store/svgs/radio-unchecked.svg'} />
          )}
        </div>
        <div className='text'>
          <span>Courier</span>
          <span>About 2 days</span>
        </div>
      </Delivery>
      {pickUpClick && (
        <>
          <div className='store-picker'>
            <Text className='checkout-form-title'>Available stores</Text>
            <div className='pickup-radio-wrapper'>
              {availableAddress.map((item) => (
                <StorePickup
                  key={item.address}
                  className='pickup-radio-options'
                >
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type='radio'
                    name='pick-address'
                    value={item.address}
                  />
                  <div className='pickup-radio-options-content'>
                    {item.address}
                  </div>
                </StorePickup>
              ))}
            </div>
          </div>
          <div className='receipt-date-picker'>
            <Text className='checkout-form-title'>
              Date {'&'} time of receipt
            </Text>
            <div className='pickup-input-wrapper'>
              <input
                type='text'
                className='checkout-form-input'
                placeholder='dd/mm/yyyy'
              />{' '}
              <input
                type='text'
                className='checkout-form-input'
                placeholder='00:00'
              />
            </div>
          </div>
        </>
      )}
      {courierClick && (
        <>
          <Text>Delivery address</Text>
          <AddressContainer>
            <Select
              labelInValue
              defaultValue={'hanoi'}
              bordered={false}
              suffixIcon={<CaretDownFilled />}
              style={{
                width: '135px',
                backgroundColor: '#f0f0f9',
                height: '40px',
              }}
            >
              <Option value='hanoi'>Ha Noi</Option>
              <Option value='hcm'>HCM City</Option>
            </Select>
            <input
              type='text'
              className='checkout-form-input'
              placeholder='Address...'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </AddressContainer>
        </>
      )}
    </div>
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

const AddressContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  height: 40px;
  & input {
    height: 40px;
    flex: 1;
    border: none;
    background-color: #f0f0f9;
    margin-left: 20px;
    padding-left: 20px;
  }
`

const StorePickup = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  & input {
    margin-right: 10px;
  }
`

const Text = styled.div`
  margin: 20px 0;
  font-size: 16px;
`
