import * as S from './styles'
import blinkingCat from './catBlinking612x612.png'
import Image from 'next/future/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <S.Container>
      <Image src={blinkingCat} alt='blackCat' />
      <Link href='#home'>About me</Link>
      <Link href='#home' className='active'>Home</Link>
      <Link href='#home'>Projects</Link>
    </S.Container>
  )
}

export default Navbar