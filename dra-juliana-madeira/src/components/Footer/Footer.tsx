import React from 'react'

import * as S from './Footer.styled'
import { encodedHelpMessage } from '../../helpers/constants'

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.ImageFrame>
        <S.Image src='assets/logo_footer.png' alt='footer-logo' />
      </S.ImageFrame>
      <S.SocialNetworkContainer>
        <S.Title>Redes Sociais</S.Title>
        <S.ButtonsContainer>
          <S.Link
            $orientation='left'
            target='_blank'
            href={`https://wa.me/+5521976162422?text=${encodedHelpMessage}`}
          >
            <S.Button>
              <S.IconButton
                src='assets/whatsapp-icon-white.png'
                alt='whatsapp-icon-button'
                $width='27px'
              />
            </S.Button>
          </S.Link>
          <S.Link
            $orientation='right'
            target='_blank'
            href={`https://www.instagram.com/drajulianamadeiraferreira?igsh=MXN3dXBkMjg0OWswZw==`}
          >
            <S.Button>
              <S.IconButton
                src='assets/instagram-icon-white.png'
                alt='instagram-icon-button'
                $width='32px'
              />
            </S.Button>
          </S.Link>
        </S.ButtonsContainer>
      </S.SocialNetworkContainer>
    </S.Container>
  )
}

export default Footer
