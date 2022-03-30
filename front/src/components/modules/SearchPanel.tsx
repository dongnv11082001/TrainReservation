import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import {
  AutoComplete,
  DatePicker,
  Col,
  Row,
  Typography,
  Switch,
  Divider,
  Modal
} from 'antd'
import {SwapRightOutlined} from '@ant-design/icons'
import {FlexBox} from './ComonLayout'
import {Ticket} from '../../types/ticket'
import {useResult} from '../../context/searchContext'
import {useNavigate} from 'react-router-dom'
import {useLoading} from '../../context/loadingContext'
import {Counter} from './Counter'

type SearchProps = {
  suggestions?: { value: string }[]
}

interface FindingTicketProps extends Ticket {
  isRoundTrip?: boolean
}

const {RangePicker} = DatePicker
const {Title, Text} = Typography

const classes = ['Soft', 'Hard', 'Bed']

const initialTicket = {
  destination: '',
  departure: '',
  departureTime: new Date(),
  arrivalTime: new Date(),
  price: 10000000,
  status: 'available' as 'available' | 'pending' | 'sold',
  passengers: 1
}

export const SearchPanel: React.FC<SearchProps> = ({suggestions}) => {
  const navigate = useNavigate()
  const {contextRoundTrip, setContextRoundTrip, passengers, setPassengers, searchTickets} = useResult()
  const {setLoading} = useLoading()
  const [findingTicket, setFindingTicket] = useState<FindingTicketProps>(initialTicket)
  const dateFormat = 'YYYY-MM-DD'
  const [check, setCheck] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)


  const handleIncreaseAmount = () => {
    setPassengers(passengers + 1)
  }
  const handleDecreaseAmount = () => {
    setPassengers(passengers - 1)
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

  const handleSearch = () => {
    setLoading(true)
    searchTickets()
    setLoading(false)
    navigate('/result')
  }


  return (
    <SearchBarContainer>
      <FlexBox style={{justifyContent: 'space-between'}}>
        <Title style={{textAlign: 'center'}} level={3}>Find train</Title>
        <PassengerInfoWrapper onClick={showModal}>
          <span>Number of Passenger, Class</span>
          <Title level={5}>
            {passengers}
            {passengers === 1 ? ' Passenger' : ' Passengers'}
            {check ? ', ' + check : ''}
          </Title>
        </PassengerInfoWrapper>
        <Modal title={'Modal'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
          bodyStyle={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div>
            <Title level={5}>Number</Title>
            <Counter amount={passengers} handleDecreaseAmount={handleDecreaseAmount}
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
              onChange={() => setContextRoundTrip(!contextRoundTrip)}
              defaultChecked={contextRoundTrip}
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
            value={findingTicket.departure}
            onChange={(value: any) => setFindingTicket({...findingTicket, departure: value})}
            options={suggestions}
            allowClear
            placeholder='Departure destination...'
          />
          <SwapRightOutlined/>
          <LocationInput
            value={findingTicket.destination}
            onChange={(value: any) => setFindingTicket({...findingTicket, destination: value})}
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
          disabled={[false, !findingTicket.isRoundTrip]}
          style={{height: '45px'}}
        />
        <Button onClick={handleSearch}>Find Train</Button>
      </FlexBox>
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  z-index:10;
  width: fit-content;
  border-radius: 1rem;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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