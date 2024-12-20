export interface ICardProps extends ICardDefaultProps, ICardDetailsProps {}

interface ICardDetailsProps {
  title: string
  imageUrl: string
  text: string
}

interface ICardDefaultProps {
  onClick: () => void
}
