import React, {useState} from 'react'
import styled from 'styled-components'
import {Slider, Typography} from 'antd'
import {FlexBox} from '../../modules/ComonLayout'
import {DawnIcon} from '../../elements/DawnIcon'
import {MorningIcon} from '../../elements/MorningIcon'
import {AfternoonIcon} from '../../elements/AfternoonIcon'
import {EveningIcon} from '../../elements/EveningIcon'

interface FilterParams {
  airline?: string
  priceUpperBound: number
  priceBelowBound: number
  departureTime?: Date
  ticketClass: 'chair' | 'soft' | 'bed'
}

const initialFilterData: FilterParams = {
  airline: 'VN Railway',
  priceUpperBound: 8000000,
  priceBelowBound: 0,
  ticketClass: 'chair'
}

const {Text} = Typography

export const ConfigCenter: React.FC = () => {
  const [filter, setFilter] = useState<FilterParams>(initialFilterData)

  const filterHeader = () => {
    return (
      <FlexBox style={{paddingBottom: 10, borderBottom: '1px solid #ddd', justifyContent: 'space-between'}}>
        <BoldText style={{fontSize: '1.2rem'}}>Bộ lọc</BoldText>
        <CancelledFilter style={{fontSize: '1.2rem'}} onClick={() => setFilter(initialFilterData)}>
          Xóa lọc
        </CancelledFilter>
      </FlexBox>)
  }

  const filterPrice = () => {
    return <FlexColumn>
      <BoldText>Khoảng giá</BoldText>
      <Text>{filter.priceBelowBound.toLocaleString()}đ - {filter.priceUpperBound.toLocaleString()}đ</Text>
      <Slider
        min={0}
        max={800000}
        step={0.01}
        // onChange={this.onChange}
        // value={typeof inputValue === 'number' ? inputValue : 0}
      />
    </FlexColumn>
  }

  const filterDepartureTime = () => {
    return <FlexColumn>
      <BoldText>Thời gian cất cánh</BoldText>
      <Grid>
        <Cell>
          <DawnIcon/>
          <Text>Sáng sớm</Text>
          <BoldText>00:00 - 06:00</BoldText>
        </Cell>
        <Cell>
          <MorningIcon/>
          <Text>Buổi sáng</Text>
          <BoldText>06:00 - 12:00</BoldText>
        </Cell>
        <Cell>
          <AfternoonIcon/>
          <Text>Buổi chiều</Text>
          <BoldText>12:00 - 18:00</BoldText>
        </Cell>
        <Cell>
          <EveningIcon/>
          <Text>Buổi tối</Text>
          <BoldText>18:00 - 24:00</BoldText>
        </Cell>
      </Grid>
    </FlexColumn>
  }

  const filterClass = () => {
    return <FlexColumn>
      <BoldText>Loại vé</BoldText>
      <Grid>
        <Cell>Ghế mềm</Cell>
        <Cell>Ghế cứng</Cell>
        <Cell>Giường nằm</Cell>
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