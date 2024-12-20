import { ICardProps } from '../Card/Card.types'

export interface ICardExhibitionProps {
  title: string
  subtitle: string
  titleAlign: 'center' | 'left' | 'right'
  cardsConstants: ICardProps[]
  titleColor?: string
  boxColor?: string
}
