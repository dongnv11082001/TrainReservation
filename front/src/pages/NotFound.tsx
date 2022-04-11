import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {Link} from 'react-router-dom'
import {FlexBox} from '../components/modules/AdminLayout'
import notfoundImage from '../asserts/images/notfound.svg'

const {Title} = Typography

const NotFound: React.FC = () => (
  <Link to='/'>
    <NotFoundContainer>
      <div className="image-wrapper">
        <img src={notfoundImage} alt="not-found"/>
      </div>
      <Title>Oops...Something went wrong here...</Title>
      <Title level={4}>Click any where to continue</Title>
    </NotFoundContainer>
  </Link>
)
export default NotFound

const NotFoundContainer = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  .image-wrapper{
    width:500px;
    height:500px;
    img{
      object-fit:contain;
    }
  }
`