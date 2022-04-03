import React from 'react'
import styled from 'styled-components'
import {Offer, UserSubmit} from '../../../types/offer'

type ContactProps = {
  userInfor?: UserSubmit
  onChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<Offer | null>
  onChangePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<Offer | null>
  onChangeGender: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<Offer | null>
}

export const Contact: React.FC<ContactProps> = ({userInfor, onChangeGender, onChangePhoneNumber, onChangeUser}) => {
  return (
    <>
      <h3>Fill in your information</h3>
      <div>
        <Input defaultValue={userInfor?.userName} onChange={onChangeUser} placeholder={'Full name'}/>
        <Input defaultValue={userInfor?.phoneNumber} onChange={onChangePhoneNumber} placeholder={'Phone number'}/>
      </div>
      <ContactGender>
        <span>Gender:</span>
        <label>
          Male
          <input checked={userInfor?.gender === 'male'} onChange={onChangeGender} type={'radio'} name={'gender'}
            value={'male'}/>
        </label>
        <label>
          Female
          <input checked={userInfor?.gender === 'female'} onChange={onChangeGender} type={'radio'} name={'gender'}
            value={'female'}/>
        </label>
      </ContactGender>
    </>
  )
}

const Input = styled.input` 
  display: block;
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
