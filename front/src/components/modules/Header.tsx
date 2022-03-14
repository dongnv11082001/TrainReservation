import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Input} from 'antd'
import {SlackSquareFilled} from '@ant-design/icons'
import {Link} from 'react-router-dom'

type HeaderProps = {
  isDominated: boolean
}

const {Search} = Input

export const Header: React.FC<HeaderProps> = ({isDominated}) => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true)

  const handleToggleTransparent = () => window.scrollY <= 60 ? setIsTransparent(true) : setIsTransparent(false)

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', handleToggleTransparent)
    return scrollListener
  })

  const handleSearch = () => {
    return null
  }

  return (
    <HeaderWrapper isTransparent={isTransparent} isShrink={isDominated}>
      <Logo to='/'>
        <SlackSquareFilled style={{marginRight: 10, fontSize: '2rem'}}/>
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

const HeaderWrapper = styled.div<{ isShrink: boolean, isTransparent: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  padding-left: ${({isShrink}) => (isShrink ? '100px' : '220px')};
  transition: padding 0.2s ease;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media screen and (max-width: 768px){
    display: none;
  }
`
const Logo = styled(Link)`
  color: black;
  font-size: 1.5em;
  font-family: Garamond, serif;
  display: flex;
  align-items: center;
`
const SearchBox = styled.div`
  width: 30%;
`
