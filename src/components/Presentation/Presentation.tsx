import * as S from './Presentation.styles'

import Image from 'next/future/image'
import myPhoto from '/public/myPhoto.png'

import { MediaContacts } from '~/components/MediaContacts'

export const Presentation = () => {
  return (
    <S.Presentation>
      <MediaContacts />

      <S.HeroInfoContainer>
        <S.HeroWelcome>
          Hi!👋 I am <span>Ricardo.</span>
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

      <Image
        src={myPhoto}
        className='my-photo'
        width={520}
        height={520}
        alt='my portfolio photo'
      />
    </S.Presentation>
  )
}