import React from 'react'
import styled from 'styled-components/macro'
import serviceBackground from '../../../asserts/images/service.jpg'
import {HomeServiceCard} from './HomeServiceCard'
import {Typography} from 'antd'

const {Title, Text} = Typography

type SourceParams = {
  title: string
  content: string
  image: string
}

type ServicesProps = {
  source: SourceParams[]
}

export const Services: React.FC<ServicesProps> = ({source}) => {
  return <Container>
    <Title style={{textAlign: 'center'}} level={1}>Our Services</Title>
    <ServiceWrapper>
      <ImageWrapper>
        <img src={serviceBackground} alt="services"/>
      </ImageWrapper>
      <Body>
        <div className="services-cards">
          {source.map((service, index) => (
            <HomeServiceCard
              key={index}
              title={service.title}
              content={service.content}
              image={service.image}
            />
          ))}
        </div>
        <div className="text">
          <Text>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam
            aliquam quaerat voluptatem. Ut enim ad minim</Text>
        </div>
      </Body>
    </ServiceWrapper>
  </Container>
}

const Container = styled.div`
  padding: 3rem 8% 5rem;
`
const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem; 
  flex-wrap: wrap;
`
const ImageWrapper = styled.div`
  flex: 1 1 20rem;
  border-radius: 2rem;
  overflow:hidden;
`
const Body = styled.div`
 flex: 2 1 30rem;
 .services-cards{
    display: flex;
    align-items: center;
    gap: 3rem;  
    flex-wrap: wrap;
    @media screen and (max-width: 1120px){
      justify-content: center;
    }
 }
 .text{
  margin-top: 1rem;
  max-width: 700px;
 }
 @media screen and (max-width: 1120px){
   display: flex;
   flex-direction: column-reverse;
   .text{
      margin: 0 0 1rem;
   }
 }
`