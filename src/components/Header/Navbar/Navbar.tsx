import * as S from './Navbar.styles'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <S.Container>
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