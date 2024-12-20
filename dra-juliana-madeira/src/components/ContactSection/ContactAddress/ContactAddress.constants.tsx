import { ReactNode } from 'react'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'
import { Mail, MapPinHouse, Phone } from 'lucide-react'
import { theme } from '../../../global.styled'

export const ContentBody: Record<TContactAddressProps['variant'], ReactNode> = {
  contact: (
    <S.ContactCardContainer>
      <S.Image src='src/assets/contact-logo.png' alt='contact-card-image' />
      <S.InfoContainer>
        <S.InformationParagraph>
          <strong>CRM:</strong> XX.XXXXX-X
        </S.InformationParagraph>
        <S.InformationParagraph>
          <strong>RQE:</strong> (XXXXX)
        </S.InformationParagraph>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.IconTextContainer>
          <Mail size={'20px'} color={theme.colors.primary} />
          <S.InformationParagraph>
            <em>xxxxxxxxxxx@gmail.com</em>
          </S.InformationParagraph>
        </S.IconTextContainer>
        <S.IconTextContainer>
          <Phone size={'20px'} color={theme.colors.primary} />
          <S.InformationParagraph>(XX) XXXXX-XXXX</S.InformationParagraph>
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
          <strong>Rua:</strong> Avenida Xxxxxx xx Xxxxxx, XXX
          <br />
          <strong>Complemento:</strong> Sala XXX
          <br />
          <strong>Bairro:</strong> Xxxxxxx
          <br />
          <strong>Rio de Janeiro - RJ</strong>
        </S.TextParagraph>
      </S.TextContainer>
    </S.AddressContainerFrame>
  )
}
