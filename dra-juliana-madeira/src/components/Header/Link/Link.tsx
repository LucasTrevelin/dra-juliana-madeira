import { TLinkProps } from './Link.types'
import * as S from './Link.styled'

export const Link: React.FC<TLinkProps> = ({
  title,
  variant,
  additionalAction
}) => {
  return (
    <S.LinkContainer key={`link-${title}`} $variant={variant}>
      <S.NavLink
        onClick={additionalAction}
        href={`#${title}`}
        $variant={variant}
      >
        {title}
      </S.NavLink>
    </S.LinkContainer>
  )
}
