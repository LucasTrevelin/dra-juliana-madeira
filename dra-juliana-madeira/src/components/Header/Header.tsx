import React from 'react'
import FixedComponent from './FixedComponent/FixedComponent'
import * as S from './Header.styled'

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <FixedComponent />
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src='src/assets/logo-header-transparent.png'
            alt='logo-header'
          />
        </S.ImageContainer>
      </S.Container>
      {/*<ModalMappedLinks
        mappedLinks={headerMenuLinks}
        isOpen={isMenuOpen}
        additionalAction={openMenu}
      />*/}
    </S.HeaderContainer>
  )
}

export default Header
