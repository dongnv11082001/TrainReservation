import React from 'react'
import styled from 'styled-components'
import {Headline} from './Healine'
import {ConditionBox} from './ConditionBox'
import uv from '../../../asserts/images/heating.png'
import temperature from '../../../asserts/images/temperature.png'
import wind from '../../../asserts/images/wind.svg'
import visibility from '../../../asserts/images/visibility.png'

type DailyForecastProps = {
  city: string
  condition: any
}

export const DailyForecast: React.FC<DailyForecastProps> = ({city, condition}) => {
  return (
    <Wrapper>
      <Headline condition={condition} city={city}/>
      <Grid>
        <ConditionBox
          category="Temperature"
          value={condition.Temperature.Imperial.Value}
          unit={`°${condition.Temperature.Imperial.Unit}`}
          description={condition.WeatherText}
          icon={temperature}
        />
        <ConditionBox
          category="UV Index"
          value={condition.UVIndex}
          description={`Today UV Index is ${condition.UVIndexText}`}
          icon={uv}
        />
        <ConditionBox
          category="Wind"
          value={condition.Wind.Speed.Imperial.Value}
          unit={condition.Wind.Speed.Imperial.Unit}
          description="Close your eyes and and sense the wind"
          icon={wind}
        />
        <ConditionBox
          category="Visibility"
          value={condition.Visibility.Imperial.Value}
          unit={condition.Visibility.Imperial.Unit}
          description="Nice day to contemplate landscape"
          icon={visibility}
        />
      </Grid>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  flex: 1 1 30rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
`
