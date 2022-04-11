import React, {ReactElement} from 'react'
import {Footer} from '../elements/Footer'
import {Header} from '../elements/Header'

export const UserLayout: React.FC = ({children}): ReactElement => {
  return (
    <>
      <Header/>
      <div>
        {children}
      </div>
      <Footer/>
    </>
  )
}
