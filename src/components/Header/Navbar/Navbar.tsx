import * as S from './Navbar.styles'

import Link from 'next/link'
import Image from 'next/future/image'

import blinkingCat from '/public/catBlinking612x612.png'

export const Navbar = () => {
  return (
    <S.Container>
      <Image src={blinkingCat} alt='blackCat' />

      <Link href='#aboutMe' passHref>
        <S.MenuLink>
          About me
        </S.MenuLink>
      </Link>

      <Link href='#home' passHref>
        <S.MenuLink className='active'>
          Home
        </S.MenuLink>
      </Link>

      <Link href='#projects' passHref>
        <S.MenuLink>
          Projects
        </S.MenuLink>
      </Link>
    </S.Container>
  )
}