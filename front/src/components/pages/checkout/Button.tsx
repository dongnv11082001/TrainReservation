import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { arrows } from '../../../constants/arrows'

type ButtonProps = {
    onNextClick: () => void
    onPrevClick: () => void
    buttonProgress: string
}

const Button: React.FC<ButtonProps> = ({buttonProgress, onNextClick, onPrevClick}) => {
  return (
    <ButtonWrapper>
      <div>
        {buttonProgress && (
          <PrevButton
            onClick={onPrevClick}
          >
            <img
              src={arrows.leftBlackArrow}
              alt=''
            />
              Back step
          </PrevButton>
        )}
        {!buttonProgress && (
          <PrevButton>
            <Link to={'/'} style={{color: '#000'}}>
                Come back homepage
            </Link>
            <img
              src={arrows.rightBlackArrow}
              alt=''
            />
          </PrevButton>
        )}
      </div>
      <div>
        {buttonProgress && (
          <NextButton onClick={onNextClick}>
            <span>{buttonProgress}</span>
            <img
              src={arrows.rightWhiteArrow}
              alt=''
            />
          </NextButton>
        )}
      </div>
    </ButtonWrapper> 
  )
}

export default Button


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  & button img {
    margin: 0 10px;
  }
`

const PrevButton = styled.button`
  border: none;
  height: 46px;
  cursor: pointer;
  background: transparent;
`

const NextButton = styled.button`
  border: none;
  padding: 0 20px;
  background-color: #1890ff;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`
