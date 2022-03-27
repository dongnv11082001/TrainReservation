import React from 'react'
import {Divider, Typography, List, Space} from 'antd'
import styled from 'styled-components'
import {isDay} from '../../../api/utils/checkDay'
import {getDateOfWeek} from '../../../api/utils/getDateOfWeek'
import {FlexBox} from '../../modules/ComonLayout'
import {getIcon} from '../../../api/utils/getIcon'

type ForecastCenterProps = {
  forecast: any
}

const {Title, Text} = Typography

export const ForecastCenter: React.FC<ForecastCenterProps> = ({forecast}) => {
  return (
    <ForecastWrapper>
      <Title level={4}>5 Days Forecast</Title>
      <Text italic>{forecast.Headline.Text}</Text>
      <Divider/>
      {forecast.DailyForecasts && (
        <StyledList
          style={{
            height: '60vh',
            overflow: 'scroll',
          }}
          itemLayout="vertical"
          size="small"
          dataSource={forecast.DailyForecasts}
          renderItem={(item: any, index) => (
            <List.Item
              style={{padding: 10}}
              key={item.Date}
              extra={
                <FlexBox style={{width: 100}}>
                  <img
                    alt="logo"
                    src={
                      isDay()
                        ? getIcon(item.Day.Icon)
                        : getIcon(item.Night.Icon)
                    }
                  />
                </FlexBox>
              }
            >
              <List.Item.Meta
                title={
                  index === 0 ? (
                    <StyledText>Today</StyledText>
                  ) : (
                    <StyledText>{getDateOfWeek(item.Date)}</StyledText>
                  )
                }
                description={
                  isDay() ? (
                    <Text italic>{item.Day.ShortPhrase}</Text>
                  ) : (
                    <Text italic>{item.Night.ShortPhrase}</Text>
                  )
                }
              />
              <FlexBox style={{justifyContent: 'flex-start', gap: 7}}>
                <StyledText>Temperature: </StyledText>
                <Text>
                  {item.Temperature.Minimum.Value.toFixed(0)}°
                  {item.Temperature.Maximum.Unit}
                </Text>
                <Text style={{fontSize: '1rem'}}>~</Text>
                <Text>
                  {item.Temperature.Maximum.Value.toFixed(0)}°
                  {item.Temperature.Maximum.Unit}
                </Text>
              </FlexBox>
              <div>
                <Space>
                  <StyledText>Wind Speed: </StyledText>
                  <Text>
                    {isDay()
                      ? `${item.Day.Wind.Speed.Value} ${item.Day.Wind.Speed.Unit}`
                      : `${item.Night.Wind.Speed.Value} ${item.Night.Wind.Speed.Unit}`}
                  </Text>
                </Space>
              </div>
              <div>
                <Space>
                  <StyledText>Air Quality: </StyledText>
                  <Text>{item.AirAndPollen[0].Category}</Text>
                </Space>
              </div>
            </List.Item>
          )}
        />
      )}
    </ForecastWrapper>
  )
}
const ForecastWrapper = styled.div`
  background: rgba(89, 121, 140, 0.3);
  padding: 15px;
  border-radius: 0.4rem;
`
const StyledList = styled(List)`
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const StyledText = styled(Text)`
  font-weight: bold;
`
