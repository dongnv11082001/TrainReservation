import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import _ from 'lodash'
import {FlexBox} from '../../modules/AdminLayout'
import {getIcon} from '../../../utils/getIcon'

type HeadlineProps = {
  city: string
  condition: any
}
type WeatherReportProps = {
  label?: string
  temp?: string
  maxTemp?: string
  unit?: string
  image?: string

}

const {Title, Text} = Typography

export const Headline: React.FC<HeadlineProps> = ({city, condition}) => {
  const tempSummary = _.values(condition.TemperatureSummary)
  const labels = Object.keys(condition.TemperatureSummary)

  return (
    <Wrapper>
      <HeroBanner>
        <Title level={4}>{city}</Title>
        <WeatherReport
          temp={condition.Temperature.Imperial.Value}
          unit={condition.Temperature.Imperial.Unit}
          image={getIcon(condition.WeatherIcon)}
        />
        <Text>{condition.WeatherText}</Text>
      </HeroBanner>
      <TemperatureSummary>
        {tempSummary.map((item: any, i: number) => (
          <WeatherReport
            key={i}
            label={labels[i]}
            temp={item.Minimum.Imperial.Value}
            maxTemp={item.Maximum.Imperial.Value}
            unit={item.Minimum.Imperial.Unit}
          />
        ))}
      </TemperatureSummary>
    </Wrapper>
  )
}

const WeatherReport: React.FC<WeatherReportProps> = ({label, temp, maxTemp, unit, image}) => {
  return (
    <Report>
      {label && <Text>{label}</Text>}
      <div className="image-wrapper">
        {image && <img src={image} alt="weather"/>}
      </div>
      <StyledText>
        {`${temp}°${unit}`}
        {maxTemp && ` ~ ${maxTemp}°${unit}`}
      </StyledText>
    </Report>
  )
}

const Wrapper = styled.div`
  background: #ddd;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const HeroBanner = styled(FlexBox)`
  flex-direction: column;
  padding: 2rem;
`
const TemperatureSummary = styled(FlexBox)`
  padding: 1rem;
  justify-content: space-evenly;
  gap: 10px;
  background-color: rgb(132, 147, 154, 0.7);
`
const StyledText = styled(Text)`
  font-weight: bold;
`
const Report = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .image-wrapper{
    width: 150px;
  }
`
