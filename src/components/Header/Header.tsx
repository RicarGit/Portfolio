import * as S from './Header.styles'

import Image from 'next/future/image'
import blinkingCat from '/public/catBlinking612x612.png'

import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <S.Header>
      <Image
        src={blinkingCat}
        className='blinking-cat'
        width={80}
        height={60}
        alt='blinking cat'
      />
      <Navbar />
    </S.Header>
  )
}