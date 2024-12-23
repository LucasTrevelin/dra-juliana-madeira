import { ReactNode } from 'react'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'
import { Mail, MapPinHouse, Phone } from 'lucide-react'
import { theme } from '../../../global.styled'

export const ContentBody: Record<TContactAddressProps['variant'], ReactNode> = {
  contact: (
    <S.ContactCardContainer>
      <S.Image src='assets/contact-logo.png' alt='contact-card-image' />
      <S.InfoContainer>
        <S.InformationParagraph>
          <strong>CRM-RJ:</strong> 814105
        </S.InformationParagraph>
        <S.InformationParagraph>
          <strong>RQE:</strong> (XXXXX)
        </S.InformationParagraph>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.IconTextContainer>
          <Mail size={'18px'} color={theme.colors.primary} />
          <S.InformationParagraph>
            <em>drajulianamadeiradermato@gmail.com</em>
          </S.InformationParagraph>
        </S.IconTextContainer>
        <S.IconTextContainer>
          <Phone size={'18px'} color={theme.colors.primary} />
          <S.InformationParagraph>(21) 97616-2422</S.InformationParagraph>
        </S.IconTextContainer>
      </S.InfoContainer>
    </S.ContactCardContainer>
  ),

  address: (
    <S.AddressContainerFrame>
      <S.Title>
        <MapPinHouse size={'20px'} color={theme.colors.black} />
        &nbsp;Endereço de atendimento:
      </S.Title>
      <S.TextContainer>
        <S.TextParagraph>
          <strong>Rua:</strong> Visconde de Pirajá, 595
          <br />
          <strong>Complemento:</strong> Edfício Astoria - sala 605
          <br />
          <strong>Bairro:</strong> Ipanema
          <br />
          <strong>Rio de Janeiro - RJ</strong>
          <br />
        </S.TextParagraph>
      </S.TextContainer>
    </S.AddressContainerFrame>
  )
}
