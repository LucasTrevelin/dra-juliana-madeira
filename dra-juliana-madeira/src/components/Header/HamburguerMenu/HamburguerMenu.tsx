import * as S from './HamburguerMenu.styled'
import { THamburguerMenu } from './HamburguerMenu.types'

export const HamburguerMenu: React.FC<THamburguerMenu> = ({
  children,
  onClick
}) => {
  return (
    <S.Container onClick={onClick}>
      <S.Image src='assets/hamburguer_menu.png' alt='hamburguer-menu' />
      {children}
    </S.Container>
  )
}
