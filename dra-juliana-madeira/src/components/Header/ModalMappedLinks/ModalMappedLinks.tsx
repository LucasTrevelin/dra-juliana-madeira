import React from 'react'
import { TModalMappedLinksProps } from './ModalMappedLinks.types'

import * as S from './ModalMappedLinks.styled'
import { Link } from '../Link'
import { AnimatePresence } from 'framer-motion'

export const ModalMappedLinks: React.FC<TModalMappedLinksProps> = ({
  mappedLinks,
  isOpen = true,
  additionalAction
}) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <S.LinksWrapper
          className='dialog'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {mappedLinks.map(({ title, variant }) => (
            <Link
              key={`link-${title}`}
              title={title}
              variant={variant}
              additionalAction={additionalAction}
            />
          ))}
        </S.LinksWrapper>
      )}
    </AnimatePresence>
  )
}
