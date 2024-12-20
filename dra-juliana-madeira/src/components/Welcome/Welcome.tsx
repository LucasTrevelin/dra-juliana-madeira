import React from 'react'

import * as S from './Welcome.styled'
import Button from '../Button/Button'

const Welcome: React.FC = () => {
  return (
    <S.Container id='Home'>
      <S.Title>Seja bem-vindo(a)</S.Title>
      <S.Subtitle>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor."
      </S.Subtitle>
      <S.Disclaimer>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor."
      </S.Disclaimer>

      <Button variant='socialMedia'>
        <span>Botão para alguma ação</span>
      </Button>
    </S.Container>
  )
}

export default Welcome
