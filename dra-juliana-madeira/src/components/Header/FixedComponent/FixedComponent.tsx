import React from 'react'

import * as Styled from './FixedComponent.styled'

const FixedComponent: React.FC = () => {
  return (
    <Styled.ComponentContainer>
      <Styled.Container>
        <Styled.MainContent>
          <Styled.TitleContainer>
            <Styled.Icon
              src='assets/whatsapp-icon-white.png'
              alt='whatsapp-icon'
            />
            <Styled.Title>(21) 97616-2422</Styled.Title>
          </Styled.TitleContainer>
        </Styled.MainContent>
      </Styled.Container>
      <Styled.Divider />
    </Styled.ComponentContainer>
  )
}

export default FixedComponent
