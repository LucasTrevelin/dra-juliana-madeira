import React from 'react'

import * as S from './Card.styled'
import { ICardProps } from './Card.types'
import Button from '../Button/Button'
import { theme } from '../../global.styled'

const Card: React.FC<ICardProps> = ({ imageUrl, onClick, text, title }) => {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt='title' />
      <S.Content>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardText>{text}</S.CardText>
      </S.Content>
      <Button
        onClick={onClick}
        variant='socialMedia'
        width='50%'
        backgroundColor={theme.colors.backgroundSecondary}
        margin='0 0 1rem 0'
      >
        <span>Saiba mais</span>
      </Button>
    </S.Container>
  )
}

export default Card
