import React, { useRef } from 'react'

import * as S from './CardExhibition.styled'
import Card from '../Card/Card'
import { ICardExhibitionProps } from './CardExhibition.types'

const CardExhibition: React.FC<ICardExhibitionProps> = ({
  title,
  subtitle,
  cardsConstants,
  titleAlign,
  titleColor,
  boxColor
}) => {
  const scrollRef = useRef(null)
  return (
    <S.Container
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.6 }}
      id={title}
    >
      <S.TitleContainer $titleAlign={titleAlign}>
        <S.Title $titleColor={titleColor}>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TitleContainer>
      <S.BoxContainer $boxColor={boxColor}>
        <S.CardContainer
          $align={cardsConstants.length > 4 ? 'flex-start' : 'center'}
        >
          {cardsConstants.map((cardProps, index) => (
            <Card
              key={index}
              imageUrl={cardProps.imageUrl}
              onClick={() => cardProps.onClick}
              text={cardProps.text}
              title={cardProps.title}
            />
          ))}
        </S.CardContainer>
      </S.BoxContainer>
    </S.Container>
  )
}

export default CardExhibition
