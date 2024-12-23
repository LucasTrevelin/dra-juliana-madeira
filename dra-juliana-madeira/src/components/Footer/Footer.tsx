import React from 'react'

import * as S from './Footer.styled'

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.ImageFrame>
        <S.Image src='assets/logo_footer.png' alt='footer-logo' />
      </S.ImageFrame>
      <S.SocialNetworkContainer>
        <S.Title>Redes Sociais</S.Title>
        <S.ButtonsContainer>
          <S.Button $orientation='left'>
            <S.IconButton
              src='assets/whatsapp-icon-white.png'
              alt='whatsapp-icon-button'
              $width='27px'
            />
          </S.Button>
          <S.Button $orientation='right'>
            <S.IconButton
              src='assets/instagram-icon-white.png'
              alt='instagram-icon-button'
              $width='32px'
            />
          </S.Button>
        </S.ButtonsContainer>
      </S.SocialNetworkContainer>
    </S.Container>
  )
}

export default Footer
