import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {
  AutoComplete,
  DatePicker,
  Col,
  Row,
  Typography,
  Switch,
  Divider,
} from 'antd'
import {SwapRightOutlined} from '@ant-design/icons'
import {FlexBox} from './ComonLayout'
import {Counter} from './Counter'
import {Modal} from 'antd'
import 'antd/dist/antd.css'

type SearchProps = {
    suggestions?: { value: string }[]
}

const {RangePicker} = DatePicker
const {Title, Text} = Typography

const classes = ['Soft', 'Hard', 'Bed']

export const SearchPanel: React.FC<SearchProps> = ({suggestions}) => {
  const [departure, setDeparture] = useState<string>()
  const [destination, setDestination] = useState<string>()
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false)
  const [amount, setAmount] = useState(1)
  const [check, setCheck] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dateFormat = 'YYYY-MM-DD'

  const handleIncreaseAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecreaseAmount = () => {
    setAmount(amount - 1)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <SearchBarContainer>
      <FlexBox style={{justifyContent: 'space-between'}}>
        <Title style={{textAlign: 'center'}} level={3}>Find train</Title>
        <PassengerInfoWrapper onClick={showModal}>
          <span>Number of Passenger, Class</span>
          <Title level={5}>
            {amount}
            {amount === 1 ? ' Passenger' : ' Passengers'}
            {check ? ', ' + check : ''}
          </Title>
        </PassengerInfoWrapper>
        <Modal title={'Modal'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} bodyStyle={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div>
            <Title level={5}>Number</Title>
            <Counter amount={amount} handleDecreaseAmount={handleDecreaseAmount}
              handleIncreaseAmount={handleIncreaseAmount}/>
          </div>
          <div style={{textAlign: 'center'}}>
            <Title level={5}>Class</Title>
            {classes.map((c) => (
              <div key={c}>
                <input type='radio' value={c} checked={c === check} onChange={() => setCheck(c)}/>
                {c}
              </div>
            ))}
          </div>
        </Modal>
        <SpacingRow align='middle' justify='center' gutter={8}>
          <Col>
            <SwitchText>One-way</SwitchText>
          </Col>
          <Col>
            <Switch
              onChange={() => setIsRoundTrip(!isRoundTrip)}
              defaultChecked={isRoundTrip}
            />
          </Col>
          <Col>
            <SwitchText>Round-trip</SwitchText>
          </Col>
        </SpacingRow>
      </FlexBox>
      <Divider style={{margin: '0 0 16px'}}/>
      <FlexBox style={{gap: '36px'}}>
        <FlexBox style={{gap: '8px'}}>
          <LocationInput
            value={departure}
            onChange={(value: any) => setDeparture(value)}
            options={suggestions}
            allowClear
            placeholder='Departure destination...'
          />
          <SwapRightOutlined/>
          <LocationInput
            value={destination}
            onChange={(value: any) => setDestination(value)}
            options={suggestions}
            allowClear
            placeholder='Arrival destination...'
          />
        </FlexBox>
        <RangePicker
          defaultValue={[
            moment('2019-09-03', dateFormat),
            moment('2019-11-22', dateFormat),
          ]}
          disabled={[false, !isRoundTrip]}
          style={{height: '45px'}}
        />
        <Link to="/result">
          <Button>Find Train</Button>
        </Link>
      </FlexBox>
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  z-index: 10;
  width: fit-content;
  border-radius: 1rem;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
`
export const LocationInput = styled(AutoComplete)`
  min-width: 200px;

  .ant-select-selector, input {
    height: 45px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const SwitchText = styled(Text)`
  font-size: 1rem;
  font-weight: 300;
`
const SpacingRow = styled(Row)`
  margin-bottom: 14px;
`
const Button = styled.span`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 1rem 0.8rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background: #729c98;
  color: #f7f6f4;
  cursor: pointer;
`

const PassengerInfoWrapper = styled.div`
  cursor: pointer;
`