import * as S from './styles'
import blinkingCat from './catBlinking612x612.png'
import Image from 'next/future/image'
import Link from 'next/link'

const Navbar = () => {
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

export default Navbar