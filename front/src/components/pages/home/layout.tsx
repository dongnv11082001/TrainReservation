import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {Button, List, Typography} from 'antd'
import {CommonLayout, FlexBox} from '../../modules/ComonLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {HomeTicket} from './HomeTicket'
import {Ticket} from '../../../types/ticket'
import trainBackground from '../../../asserts/images/train.png'
import {Services} from './Services'
import {DailyForecast} from './DailyForecast'
import {ForecastCenter} from './ForecastCenter'

type ServiceProps = {
  title: string
  content: string
  image: string
}

interface HomeProps {
  city?: string
  condition: any
  forecast: any
  services: ServiceProps[]
  tickets?: Ticket[]
}

const {Title} = Typography

const Layout: React.FC<HomeProps> = ({services, tickets, condition, city, forecast}) => {
  const [ticketNumber, setTicketNumber] = useState<number>(5)
  const [showingTickets, setShowingTickets] = useState<Ticket[] | undefined>(tickets?.slice(0, 5))

  const handleLoadMore = () => {
    const newTicketList = tickets?.slice(0, ticketNumber)
    setShowingTickets(newTicketList)
    setTicketNumber(ticketNumber + 5)
  }

  const loadMoreButton = () => (
    <FlexBox>
      <Button shape="round" size="large" onClick={handleLoadMore}>
        Load More
      </Button>
    </FlexBox>
  )

  return (
    <CommonLayout>
      <Banner background={trainBackground}>
        <SearchPanel/>
      </Banner>
      <Services source={services}/>
      <Heading level={2}>Good-price flights</Heading>
      <List
        style={{
          background: 'rgba(78,131,100,0.3)',
          padding: '2rem 5%'
        }}
        dataSource={showingTickets}
        loadMore={loadMoreButton()}
        renderItem={(ticket: Ticket) => (
          <HomeTicket
            key={ticket.id}
            id={ticket.id}
            departure={ticket.departure}
            destination={ticket.destination}
            price={ticket.price}
            departureTime={ticket.departureTime}
            arrivalTime={ticket.arrivalTime}
            airline={ticket.airline}
            ticketClass={ticket.ticketClass}
          />
        )}
      />
      <Heading level={2}>Weather Forecast</Heading>
      <WeatherBox>
        {condition && city && (
          <DailyForecast condition={condition} city={city}/>
        )}
        {forecast && <ForecastCenter forecast={forecast}/>}
      </WeatherBox>
    </CommonLayout>
  )
}
export default Layout

const Heading = styled(Title)`
  text-align: center;
  margin: 2rem 0;
`
export const Banner = styled.div<{ background?: string }>`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center no-repeat url(${({background}) => background});
  background-size: cover;
  :after {
  content: "";
  position: absolute;
  inset:0;
  background: rgba(0,0,0,0.3);
  pointer-events: none;
}
`
const WeatherBox = styled(FlexBox)`
  padding: 0 8% 5rem;
  justify-content: space-between;
  align-items: initial;
  gap: 2rem;  
  flex-wrap: wrap;
`