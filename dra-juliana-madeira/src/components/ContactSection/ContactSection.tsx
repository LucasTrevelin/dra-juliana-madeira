import { ContactAddress } from './ContactAddress'
import * as S from './ContactSection.styled'

export const ContactSection = () => {
  return (
    <S.ContactSection id='Contato'>
      <S.TitleContainer>
        <S.SectionTitle>Contato</S.SectionTitle>
      </S.TitleContainer>
      <ContactAddress variant='contact' />
      <ContactAddress variant='address' />
    </S.ContactSection>
  )
}
