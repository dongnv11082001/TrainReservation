import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CommonLayout } from '../../modules/ComonLayout'
import { SearchPanel } from '../../modules/SearchPanel'
import { HomeServiceCard } from './../home/HomeServiceCard'
import bannerBackground from '../../../asserts/images/banner.jpg'
import customerCare from '../../../asserts/images/247.svg'
import bestprice from '../../../asserts/images/bestprice.svg'
import payment from '../../../asserts/images/payment.svg'
import { Ticket } from '../../elements/Ticket'

export interface ITicket {
  id: string
  trip: string
  date: string
  price: string
  label: string
}

const serviceData = [
  {
    title: 'Hỗ trợ khách hàng 24/7',
    content:
      'Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và ngày lễ.',
    image: customerCare,
  },
  {
    title: 'Thanh toán dễ dàng, đa dạng',
    content: 'Bao gồm thêm chuyển khoản ngân hàng và tiền mặt tại cửa hàng.',
    image: payment,
  },
  {
    title: 'Săn vé giá tốt nội địa, quốc tế ',
    content:
      'So sánh giá tốt nhất từ các hãng hàng không nội địa và 50.000 đường bay quốc tế.',
    image: bestprice,
  },
]

const TicketsPage: React.FC = () => {
  const [tickets, setTickets] = useState<ITicket[]>([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
      )
      const data = await response.json()
      setTickets(data)
    }

    fetchApi()
  }, [])
  const servicesWrapper = () => {
    return (
      <ServiceWrapper>
        {serviceData.map((service, index) => (
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
      <TicketsWrapper>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </TicketsWrapper>
    </CommonLayout>
  )
}
export default TicketsPage

const Banner = styled.div<{ background?: string }>`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center no-repeat url(${({ background }) => background});
  background-size: cover;
  background-attachment: fixed;
`
const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const TicketsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`
