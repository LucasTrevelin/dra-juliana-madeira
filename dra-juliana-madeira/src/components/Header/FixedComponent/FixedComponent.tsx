import React from 'react'

import * as Styled from './FixedComponent.styled'

const FixedComponent: React.FC = () => {
  return (
    <Styled.ComponentContainer>
      <Styled.Container>
        <Styled.MainContent>
          <Styled.TitleContainer>
            <Styled.Icon
              src='src/assets/phone-icon-white.png'
              alt='phone-icon'
            />
            <Styled.Title>(DDD) XXXX-XXXX</Styled.Title>
          </Styled.TitleContainer>
          <Styled.Title>|</Styled.Title>
          <Styled.TitleContainer>
            <Styled.Icon
              src='src/assets/whatsapp-icon-white.png'
              alt='whatsapp-icon'
            />
            <Styled.Title>(DDD) XXXX-XXXX</Styled.Title>
          </Styled.TitleContainer>
        </Styled.MainContent>
      </Styled.Container>
      <Styled.Divider />
    </Styled.ComponentContainer>
  )
}

export default FixedComponent
