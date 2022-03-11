import React from 'react'
import styled from 'styled-components'
import {Input} from 'antd'
import {SlackSquareFilled} from '@ant-design/icons'

const {Search} = Input

type HeaderProps = {
    isDominated: boolean
}

export const Header: React.FC<HeaderProps> = ({isDominated}) => {
  const handleSearch = () => {
    return null
  }
  return (
    <HeaderWrapper isShrink={isDominated}>
      <Logo>
        <SlackSquareFilled style={{marginRight: 10, fontSize: '2rem'}}/>
                Đặt Vé Tàu Dễ Dàng
      </Logo>
      <SearchBox>
        <Search
          placeholder="Tìm vé tàu giá rẻ..."
          onSearch={handleSearch}
          size="middle"
          enterButton
          allowClear
        />
      </SearchBox>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div<{ isShrink: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  padding-left: ${({isShrink}) => (isShrink ? '100px' : '220px')};
  transition: padding 0.2s ease;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 1;
  @media screen and (max-width: 768px){
    display: none;
  }
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