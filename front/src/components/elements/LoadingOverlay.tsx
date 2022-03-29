import React from 'react'
import {Spin} from 'antd'
import {FlexBox} from '../modules/ComonLayout'

export const LoadingOverlay: React.FC = () => {
  return <FlexBox style={{width: '100vw', height: '100vh'}}>
    <Spin size="large"/>
  </FlexBox>
}