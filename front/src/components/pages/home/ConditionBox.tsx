import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'

type ConditionBoxProps = {
  category?: string
  value?: string
  unit?: string
  description?: string
  icon?: string
}

const {Title, Text} = Typography

export const ConditionBox: React.FC<ConditionBoxProps> = ({category, value, unit, description, icon}) => {
  return (
    <Box>
      <div className="title">
        <Text>{category}</Text>
      </div>
      <div className="body">
        <div className="content">
          <Title level={3}>{unit ? value + unit : value}</Title>
          <Text>{description}</Text>
        </div>
        <div className="image-wrapper">
          <img src={icon} alt="icon"/>
        </div>
      </div>
    </Box>
  )
}
const Box = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255);
  border-radius: 1.2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .title {
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: 1px solid #ddd;
  }
  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    .content {
      width: 70%;
    }
    .image-wrapper{
      width: 40px;
    }
  }
`
