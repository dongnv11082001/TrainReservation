import React from 'react'
import styled from 'styled-components'

type Props = {
    amount: number
    handleDecreaseAmount: () => void,
    handleIncreaseAmount: () => void
}

export const Counter: React.FC<Props> = ({ amount, handleDecreaseAmount, handleIncreaseAmount }) => {
  return (
    <CounterContainer>
      <div className="btn">
        <button className="btn" onClick={handleDecreaseAmount} disabled={amount === 1}>-</button>
      </div>
      <div className="amount">{amount}</div>
      <div className="btn" >
        <button className="btn" onClick={handleIncreaseAmount}>+</button>
      </div>
    </CounterContainer>
  )
}

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  .btn {
    cursor: pointer;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: #eee;
    text-align: center;
    line-height: 22px;
    font-size: 1.4rem;
    user-select: none;
    outline: none;
    border: none;
  }
`
