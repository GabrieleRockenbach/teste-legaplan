import Image from 'next/image'
import React from 'react'
import CurrentDate from '../currentDate/currentDate'
import './header.scss'

const userName = 'Marcus'

export default function Header() {
  return (
    <div className='headerContainer'>
      <div className='flex headerGroup'>
        <Image
          src="/images/logo.svg"
          alt='Logotipo FocalPoint'
          width={150}
          height={36}
        ></Image>
        <p className='headerMessage'>Bem-vindo de volta, {userName}</p>
        <CurrentDate className='headerDate'/>
      </div>
    </div>
  )
}
