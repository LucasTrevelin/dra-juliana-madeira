import { useRef } from 'react'
import { ContentBody } from './ContactAddress.constants'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'

export const ContactAddress: React.FC<TContactAddressProps> = ({ variant }) => {
  const scrollRef = useRef(null)
  return variant === 'contact' ? (
    <S.CardContainer
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.3 }}
    >
      {ContentBody[variant]}
    </S.CardContainer>
  ) : (
    <S.AddressContainer
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.3 }}
    >
      {ContentBody[variant]}
    </S.AddressContainer>
  )
}
