import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { SlackSquareFilled } from '@ant-design/icons'

const { Search } = Input

export const Header: React.FC = () => {
  const handleSearch = () => {
    return null
  }

  return (
    <HeaderWrapper>
      <Logo>
        <SlackSquareFilled style={{ marginRight: 10, fontSize: '2rem' }} />
        Đặt Vé Tàu Dễ Dàng
      </Logo>
      <SearchBox>
        <Search
          placeholder='Tìm vé tàu giá rẻ...'
          onSearch={handleSearch}
          size='middle'
          enterButton
          allowClear
        />
      </SearchBox>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  background: #000;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`
const Logo = styled.div`
  color: white;
  font-size: 1.5em;
  font-family: Garamond, serif;
  display: flex;
  align-items: center;
`
const SearchBox = styled.div`
  width: 30%;
`
