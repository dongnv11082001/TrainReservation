import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {Link} from 'react-router-dom'
import {FlexBox} from '../components/modules/ComonLayout'
import notfoundImage from '../asserts/images/notfound.svg'

const {Title} = Typography

const NotFound: React.FC = () => (
  <Link to='/'>
    <NotFoundContainer>
      <img width={500} height={500} src={notfoundImage} alt="not-found"/>
      <Title>Oops...Something went wrong here...</Title>
    </NotFoundContainer>
  </Link>
)
export default NotFound

const NotFoundContainer = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
`