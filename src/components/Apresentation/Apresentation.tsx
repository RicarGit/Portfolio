import * as S from './Apresentation.styles'

import Image from 'next/future/image'
import myPhoto from 'public/myPhoto.png'

export const Apresentation = () => {
  return (
    <S.Apresentation>
      <S.HeroInfoContainer>
        <S.HeroWelcome>
          Hi!👋 I am Ricardo.
        </S.HeroWelcome>

        <S.HeroApresentation>
          A <span>Front-End Developer</span><br />
          from São Paulo.
        </S.HeroApresentation>

        <S.HeroButtons>
          Contact Me
        </S.HeroButtons>

        <S.HeroButtons>
          View Portfolio
        </S.HeroButtons>
      </S.HeroInfoContainer>

      <Image src={myPhoto} width={520} height={520} alt='my portfolio photo' />
    </S.Apresentation>
  )
}