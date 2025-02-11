import React, { useState } from 'react'
import * as S from './Header.styled'
import { ModalMappedLinks } from './ModalMappedLinks/ModalMappedLinks'
import { headerLinks, headerMenuLinks } from './HeaderLinks'
import { MappedLinks } from './MappedLinks/MappedLinks'
import { HamburguerMenu } from './HamburguerMenu'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src='assets/logo-header-transparent-60.png'
            alt='logo-header'
          />
          <MappedLinks mappedLinks={headerLinks} />
          <HamburguerMenu onClick={openMenu} />
        </S.ImageContainer>
      </S.Container>
      <ModalMappedLinks
        mappedLinks={headerMenuLinks}
        isOpen={isMenuOpen}
        additionalAction={openMenu}
      />
    </>
  )
}

export default Header
