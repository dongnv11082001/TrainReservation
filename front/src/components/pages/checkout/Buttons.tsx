import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import styled from 'styled-components'
import {arrows} from '../../../constants/arrows'

type ButtonProps = {
  validate: () => boolean
  onNextClick: () => void
  onPrevClick: () => void
  buttonProgress: string
}

const Buttons: React.FC<ButtonProps> = ({buttonProgress, onNextClick, onPrevClick, validate}) => {
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
          <NextButton type='primary' disabled={validate()} onClick={onNextClick}>
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

export default Buttons


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  & button img {
    margin: 0 10px;
    width: 24px !important;
    height: 24px !important;
  }
`

const PrevButton = styled.button`
  border: none;
  height: 46px;
  cursor: pointer;
  background: transparent;
`

const NextButton = styled(Button)`
  border: none;
  padding: 0 20px;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`
