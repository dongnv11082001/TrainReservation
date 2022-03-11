import React from 'react'
import styled from 'styled-components'
import {CommonLayout} from '../../modules/ComonLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {HomeServiceCard} from './HomeServiceCard'
import bannerBackground from '../../../asserts/images/banner.jpg'

type ServiceProps = {
    title: string
    content: string
    image: string
}

interface HomeProps {
    services: ServiceProps[]
}

const Layout: React.FC<HomeProps> = ({services}) => {
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
        <SearchPanel/>
      </Banner>
      {servicesWrapper()}
    </CommonLayout>
  )
}
export default Layout

const Banner = styled.div<{ background?: string }>`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center no-repeat url(${({background}) => background});
  background-size: cover;
  background-attachment: fixed;
`
const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3% 2rem;  
  flex-wrap: wrap;
`
