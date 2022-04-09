import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {
  AutoComplete,
  DatePicker,
  Col,
  Row,
  Typography,
  Switch,
  Divider,
  Modal,
  Button
} from 'antd'
import {SwapRightOutlined} from '@ant-design/icons'
import {FlexBox} from './AdminLayout'
import {Ticket} from '../../types/ticket'
import {useResult} from '../../context/searchContext'
import {useNavigate} from 'react-router-dom'
import {useLoading} from '../../context/loadingContext'
import {Counter} from './Counter'

type SearchProps = {
  suggestions?: { value: string }[]
}

const {RangePicker} = DatePicker
const {Title, Text} = Typography

const classes = [
  {
    class: 'Long Chair',
    description: 'Fly economically, meet all basic needs',
    value: 'hard'
  },
  {
    class: 'Soft Chair',
    description: 'Reasonable cost with good meals and ample leg room',
    value: 'soft'
  },
  {
    class: 'Bed',
    description: 'Top class, with personalized 5-star service',
    value: 'bed'
  }
]

const initialTicket = {
  destination: undefined,
  departure: undefined,
  departureTime: new Date(),
  arrivalTime: new Date(),
  price: 10000000,
  status: 'available' as 'available' | 'pending' | 'sold',
  passengers: 1
}

export const SearchPanel: React.FC<SearchProps> = ({suggestions}) => {
  const navigate = useNavigate()
  const {
    contextTicketClass,
    setContextTicketClass,
    contextRoundTrip,
    setContextRoundTrip,
    passengers,
    setPassengers,
    searchTickets
  } = useResult()
  const {setLoading} = useLoading()
  const [findingTicket, setFindingTicket] = useState<Ticket>(initialTicket)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dateFormat = 'DD/MM/YYYY'

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
    setContextTicketClass('hard')
    setIsModalVisible(false)
  }

  const handleSearch = () => {
    const queryData = {
      ...findingTicket,
      ticketClass: contextTicketClass,
      isRoundTrip: contextRoundTrip
    }
    setLoading(true)
    searchTickets()
    setLoading(false)
    navigate('/result')
  }

  const validate = () => Object.values(findingTicket).some(value => !value)

  return (
    <SearchBarContainer>
      <FlexBox style={{justifyContent: 'space-between'}}>
        <Title style={{textAlign: 'center'}} level={3}>Find train</Title>
        <PassengerInfoWrapper onClick={showModal}>
          <span>Number of Passengers | Class</span>
          <Title level={5}>
            {passengers}
            {passengers === 1 ? ' Passenger' : ' Passengers'}
            {contextTicketClass ? ', ' + contextTicketClass : ''}
          </Title>
        </PassengerInfoWrapper>
        <Modal title={'Modal'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div>
            <Title level={5}>Number of Passengers</Title>
            <Counter
              amount={passengers}
              handleDecreaseAmount={handleDecreaseAmount}
              handleIncreaseAmount={handleIncreaseAmount}
            />
          </div>
          <Divider/>
          <div>
            <Title level={5}>Class</Title>
            {classes.map((ticketClass, index) => (
              <StyledFlexBox key={index}>
                <input
                  style={{width: 40, height: 18}}
                  type='radio'
                  value={ticketClass.value}
                  checked={ticketClass.value === contextTicketClass}
                  onChange={() => setContextTicketClass(ticketClass.value as 'bed' | 'soft' | 'hard')}
                />
                <div>
                  <Title style={{margin: 0}} level={5}>{ticketClass.class}</Title>
                  <Text>{ticketClass.description}</Text>
                </div>
              </StyledFlexBox>
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
            moment(new Date(), dateFormat),
            moment(new Date(), dateFormat),
          ]}
          disabled={[false, !contextRoundTrip]}
          style={{height: '45px'}}
        />
        <Button size='large' type="primary" disabled={validate()} onClick={handleSearch}>Find Train</Button>
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
const PassengerInfoWrapper = styled.div`
  cursor: pointer;
`
const StyledFlexBox = styled(FlexBox)`
  justify-content: initial;
  align-items: initial;
  margin: 12px 0;
`