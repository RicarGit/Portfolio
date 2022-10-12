import * as S from './MediaContacts.styles'
import Image from 'next/future/image'

import discord from '/public/discord.svg'
import linkedIn from '/public/linkedin.svg'
import telegram from '/public/telegram.svg'
import github from '/public/github.svg'

export const MediaContacts = () => {
  return (
    <S.Container>
      <Image
        src={discord}
        className='mediaIcon'
        width={38}
        height={38}
        alt='discord'
      />
      <Image
        src={linkedIn}
        className='mediaIcon'
        width={38}
        height={38}
        alt='linkedin'
      />
      <Image
        src={telegram}
        className='mediaIcon'
        width={38}
        height={38}
        alt='telegram'
      />
      <Image
        src={github}
        className='mediaIcon'
        width={38}
        height={38}
        alt='github'
      />
    </S.Container>
  )
}