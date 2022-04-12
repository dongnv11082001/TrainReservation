import React from 'react'
import styled from 'styled-components'
import {Slider, Typography} from 'antd'
import moment from 'moment'
import {FlexBox} from '../../modules/AdminLayout'
import {DawnIcon} from '../../../asserts/icons/DawnIcon'
import {MorningIcon} from '../../../asserts/icons/MorningIcon'
import {AfternoonIcon} from '../../../asserts/icons/AfternoonIcon'
import {EveningIcon} from '../../../asserts/icons/EveningIcon'
import {filterParams} from '../../../hooks/useFilter'

type ConfigCenterProps = {
  filter: (props: Omit<filterParams, 'tickets'>) => void
}

interface FilterParams {
  airline?: string
  priceUpperBound?: number
  priceBelowBound: number
  departureTime?: Date
  ticketClass?: 'chair' | 'soft' | 'bed'
}

const filterData: FilterParams = {
  airline: 'VN Railway',
  priceUpperBound: 100,
  priceBelowBound: 0
}

const timeFilterData = {
  format: 'HH:mm',
  data: {
    dawn: [
      new Date(new Date().setHours(0, 0)),
      new Date(new Date().setHours(6, 0))
    ],
    morning: [
      new Date(new Date().setHours(6, 0)),
      new Date(new Date().setHours(12, 0))
    ],
    afternoon: [
      new Date(new Date().setHours(12, 0)),
      new Date(new Date().setHours(18, 0))
    ],
    evening: [
      new Date(new Date().setHours(18, 0)),
      new Date(new Date().setHours(24, 0))
    ],
  }
}

const {Text} = Typography

export const ConfigCenter: React.FC<ConfigCenterProps> = ({filter}) => {

  const filterHeader = () => {
    return (
      <FlexBox style={{paddingBottom: 10, borderBottom: '1px solid #ddd', justifyContent: 'space-between'}}>
        <BoldText style={{fontSize: '1.2rem'}}>Filter</BoldText>
        <CancelledFilter style={{fontSize: '1.2rem'}} onClick={() => filter({})}>
          Clear
        </CancelledFilter>
      </FlexBox>)
  }

  const filterPrice = () => {
    return <FlexColumn>
      <BoldText>Price</BoldText>
      <Text>{filterData.priceBelowBound?.toLocaleString()}đ - {filterData.priceUpperBound?.toLocaleString()}đ</Text>
      <Slider
        min={filterData.priceBelowBound}
        max={filterData.priceUpperBound}
        step={1}
        onChange={(values) => filter({priceRange: [filterData.priceBelowBound, values]})}
      />
    </FlexColumn>
  }

  const filterDepartureTime = () => {
    return <FlexColumn>
      <BoldText>Take off time</BoldText>
      <Grid>
        <Cell onClick={() => filter({timeRange: timeFilterData.data.dawn})}>
          <DawnIcon/>
          <Text>Dawn</Text>
          <BoldText>
            {moment(timeFilterData.data.dawn[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.dawn[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell onClick={() => filter({timeRange: timeFilterData.data.morning})}>
          <MorningIcon/>
          <Text>Morning</Text>
          <BoldText>
            {moment(timeFilterData.data.morning[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.morning[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell onClick={() => filter({timeRange: timeFilterData.data.afternoon})}>
          <AfternoonIcon/>
          <Text>Afternoon</Text>
          <BoldText>
            {moment(timeFilterData.data.afternoon[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.afternoon[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell onClick={() => filter({timeRange: timeFilterData.data.evening})}>
          <EveningIcon/>
          <Text>Evening</Text>
          <BoldText>
            {moment(timeFilterData.data.evening[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.evening[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
      </Grid>
    </FlexColumn>
  }

  const filterClass = () => {
    return <FlexColumn>
      <BoldText>Ticket Class</BoldText>
      <Grid>
        <Cell onClick={() => filter({ticketClass: 'soft'})}>Soft chair</Cell>
        <Cell onClick={() => filter({ticketClass: 'hard'})}>Long chair</Cell>
        <Cell onClick={() => filter({ticketClass: 'bed'})}>Bed</Cell>
      </Grid>
    </FlexColumn>
  }

  return <ConfigWrapper>
    {filterHeader()}
    {filterPrice()}
    {filterDepartureTime()}
    {filterClass()}
  </ConfigWrapper>
}
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const ConfigWrapper = styled(FlexColumn)`
  min-width: 320px;
  padding: 20px;
  background: white;
  height: fit-content;
  border-radius: 10px;
  gap: 1.4rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
`
const Cell = styled(FlexBox)`
  flex-direction: column;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  cursor: pointer;
`
const BoldText = styled(Text)`
  font-weight: bold;
  margin-bottom: 8px;
`
const CancelledFilter = styled(BoldText)`
  color: #00b6f3;
`