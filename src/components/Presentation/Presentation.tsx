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

        <S.HeroPresentation>
          A <span>Front-End Developer</span><br />
          from São Paulo.
        </S.HeroPresentation>

        <S.HeroButton>
          Contact Me
        </S.HeroButton>

        <S.HeroButton>
          View Portfolio
        </S.HeroButton>
      </S.HeroInfoContainer>

      <Image
        src={myPhoto}
        className='my-photo'
        width={520}
        height={520}
        priority
        alt='my portfolio photo'
      />
    </S.Presentation>
  )
}