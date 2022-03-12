import React from 'react'
import styled from 'styled-components/macro'
import { Typography } from 'antd'
import { CommonLayout, FlexBox } from '../../modules/ComonLayout'
import { SearchPanel } from '../../modules/SearchPanel'
import { HomeServiceCard } from './HomeServiceCard'
import bannerBackground from '../../../asserts/images/banner.jpg'
import { Ticket } from './HomeTicket'
import { TicketProps } from '../../../types/ticket'

type ServiceProps = {
  title: string
  content: string
  image: string
}

interface HomeProps {
  services: ServiceProps[]
  tickets?: TicketProps[]
}

const { Title } = Typography

const Layout: React.FC<HomeProps> = ({ services, tickets }) => {
  const servicesWrapper = () => {
    return (
      <ServiceWrapper>
        {services.map((service, index) => (
          <HomeServiceCard
            key={index}
            title={service.title}
            content={service.content}
            image={service.image}
          />
        ))}
      </ServiceWrapper>
    )
  }

  return (
    <CommonLayout>
      <Banner background={bannerBackground}>
        <SearchPanel />
      </Banner>
      {servicesWrapper()}
      <StyledFlexBox>
        <Title style={{ fontSize: '2rem' }}>Chuyến bay giá tốt</Title>
        <TicketWrapper>
          {tickets?.map((ticket) => (
            <Ticket
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
          ))}
        </TicketWrapper>
      </StyledFlexBox>
    </CommonLayout>
  )
}
export default Layout

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 5rem 2rem;  
  flex-wrap: wrap;
`
const StyledFlexBox = styled(FlexBox)`
  flex-direction: column;
  background: #e2e3f7;
  padding: 3rem 5%;
`
const TicketWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  padding: 2rem 5%;
`
const Banner = styled.div<{ background?: string }>`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: bottom no-repeat url(${({background}) => background});
  background-size: cover;
`
