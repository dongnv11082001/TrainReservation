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
} from 'antd'
import {SwapRightOutlined} from '@ant-design/icons'

import {FlexBox} from './ComonLayout'

type SearchProps = {
  suggestions?: { value: string }[]
}

const {RangePicker} = DatePicker
const {Title, Text} = Typography

export const SearchPanel: React.FC<SearchProps> = ({suggestions}) => {
  const [departure, setDeparture] = useState<string>()
  const [destination, setDestination] = useState<string>()
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false)
  const dateFormat = 'YYYY-MM-DD'

  return (
    <SearchBarContainer>
      <FlexBox style={{justifyContent: 'space-between'}}>
        <Title style={{textAlign: 'center'}} level={3}>
          Tìm chuyến tàu
        </Title>
        <SpacingRow align='middle' justify='center' gutter={8}>
          <Col>
            <SwitchText>Một chiều</SwitchText>
          </Col>
          <Col>
            <Switch
              onChange={() => setIsRoundTrip(!isRoundTrip)}
              defaultChecked={isRoundTrip}
            />
          </Col>
          <Col>
            <SwitchText>Khứ hồi</SwitchText>
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
            placeholder='Điểm khời hành...'
          />
          <SwapRightOutlined/>
          <LocationInput
            value={destination}
            onChange={(value: any) => setDestination(value)}
            options={suggestions}
            allowClear
            placeholder='Điểm đến...'
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
        <Button>Tìm chuyến tàu</Button>
      </FlexBox>
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  width: fit-content;
  border-radius: 1rem;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const LocationInput = styled(AutoComplete)`
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
  background: #55b7f3;
  color: white;
  cursor: pointer;
`
