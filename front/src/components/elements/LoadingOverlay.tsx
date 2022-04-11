import React from 'react'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {FlexBox} from '../modules/AdminLayout'

export const LoadingOverlay: React.FC = () => {
  return <Link to='/'>
    <FlexBox style={{width: '100vw', height: '100vh'}}>
      <Spin size="large"/>
    </FlexBox>
  </Link>
}