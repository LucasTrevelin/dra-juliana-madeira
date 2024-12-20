import React from 'react'
import { TMappedLinksProps } from './MappedLinks.types'

import * as S from './MappedLinks.styled'
import { Link } from '../Link'

export const MappedLinks: React.FC<TMappedLinksProps> = ({ mappedLinks }) => {
  return (
    <S.LinksWrapper>
      {mappedLinks.map(({ title, variant }) => (
        <Link key={`link-${title}`} title={title} variant={variant} />
      ))}
    </S.LinksWrapper>
  )
}
