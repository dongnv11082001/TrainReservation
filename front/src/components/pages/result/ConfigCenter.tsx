import React, {useState} from 'react'
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

enum timeConstant {
  DAWN = 0,
  MORNING = 1,
  AFTERNOON = 2,
  EVENING = 3
}

enum classConstant {
  HARD = 0,
  SOFT = 1,
  BED = 2
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
  const [selectedClass, setSelectedClass] = useState<number>()
  const [selectedTime, setSelectedTime] = useState<number>()

  const filterHeader = () => {
    return (
      <FlexBox style={{paddingBottom: 10, borderBottom: '1px solid #ddd', justifyContent: 'space-between'}}>
        <BoldText style={{fontSize: '1.2rem'}}>Filter</BoldText>
        <CancelledFilter style={{fontSize: '1.2rem', cursor: 'pointer'}} onClick={() => filter({})}>
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
        <Cell className="dawn-filter" onClick={() => {
          filter({timeRange: timeFilterData.data.dawn})
          setSelectedTime(timeConstant.DAWN)
        }}>
          <DawnIcon/>
          <Text>Dawn</Text>
          <BoldText>
            {moment(timeFilterData.data.dawn[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.dawn[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell className="morning-filter" onClick={() => {
          filter({timeRange: timeFilterData.data.morning})
          setSelectedTime(timeConstant.MORNING)
        }}>
          <MorningIcon/>
          <Text>Morning</Text>
          <BoldText>
            {moment(timeFilterData.data.morning[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.morning[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell className="afternoon-filter" onClick={() => {
          filter({timeRange: timeFilterData.data.afternoon})
          setSelectedTime(timeConstant.AFTERNOON)
        }}>
          <AfternoonIcon/>
          <Text>Afternoon</Text>
          <BoldText>
            {moment(timeFilterData.data.afternoon[0]).format(timeFilterData.format) + ' - '}
            {moment(timeFilterData.data.afternoon[1]).format(timeFilterData.format)}
          </BoldText>
        </Cell>
        <Cell className="evening-filter" onClick={() => {
          filter({timeRange: timeFilterData.data.evening})
          setSelectedTime(timeConstant.EVENING)
        }}>
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
        <Cell className="soft-filter" onClick={() => {
          filter({ticketClass: 'soft'})
          setSelectedClass(classConstant.SOFT)
        }}>
          Soft chair
        </Cell>
        <Cell className="hard-filter" onClick={() => {
          filter({ticketClass: 'hard'})
          setSelectedClass(classConstant.HARD)
        }}>
          Long chair
        </Cell>
        <Cell className="bed-filter" onClick={() => {
          filter({ticketClass: 'bed'})
          setSelectedClass(classConstant.BED)
        }}>Bed</Cell>
      </Grid>
    </FlexColumn>
  }

  return <ConfigWrapper
    selectedTime={selectedTime}
    selectedClass={selectedClass}
  >
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
const ConfigWrapper = styled(FlexColumn)<{ selectedTime?: number, selectedClass?: number }>`
  min-width: 320px;
  padding: 20px;
  background: white;
  height: fit-content;
  border-radius: 10px;
  gap: 1.4rem;
  .dawn-filter{
    outline: ${({selectedTime}) => selectedTime === timeConstant.DAWN && '1px solid #00b6f3'}
  }
  .morning-filter{
    outline: ${({selectedTime}) => selectedTime === timeConstant.MORNING && '1px solid #00b6f3'}
  }
  .afternoon-filter{
    outline: ${({selectedTime}) => selectedTime === timeConstant.AFTERNOON && '1px solid #00b6f3'}  
  }
  .evening-filter{
    outline: ${({selectedTime}) => selectedTime === timeConstant.EVENING && '1px solid #00b6f3'}
  } 
  .hard-filter{
    outline: ${({selectedClass}) => selectedClass === classConstant.HARD && '1px solid #00b6f3'}
  } 
  .soft-filter{
    outline: ${({selectedClass}) => selectedClass === classConstant.SOFT && '1px solid #00b6f3'}
  }
  .bed-filter{
    outline: ${({selectedClass}) => selectedClass === classConstant.BED && '1px solid #00b6f3'}
  }
  
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