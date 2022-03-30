import React from 'react'
import styled from 'styled-components'
import {FormWrapper} from '../../../GlobalStyle'

export const Contact = () => {
  return (
    <FormWrapper>
      <h3>Fill in your information</h3>
      <div>
        <Input placeholder={'Full name'}/>
        <Input placeholder={'Phone number'}/>
      </div>
      <ContactGender>
        <span>Gender:</span>
        <label>
          Male
          <input type={'radio'} name={'gender'} defaultChecked={true}/>
        </label>
        <label>
          Female
          <input type={'radio'} name={'gender'} value={'female'}/>
        </label>
      </ContactGender>
    </FormWrapper>
  )
}

const Input = styled.input` 
  height: 50px;
  border-radius: 4px;
  text-indent: 13px;
  border: 1px solid #f0f0f5;
  margin-right: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  width: 100%;
`

const ContactGender = styled.div`
  & span {
    margin-right: 20px;
  }
  & label {
    font-weight: 600;
  }
  & label input {
    margin: 0 10px 20px 10px;
  }
`
