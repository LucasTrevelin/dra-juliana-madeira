import React from 'react'

import * as S from './Greetings.styled'
import Button from '../Button/Button'

const Greetings: React.FC = () => {
  return (
    <S.Container>
      <S.Greetings> Olá, Paciente </S.Greetings>
      <S.GreetingsContent>
        <S.IntroContent>
          <S.PortraitFrame
            src='src/assets/upper-left-frame.png'
            alt='frame-upper-left'
            $coordinate='up'
          />
          <S.IntroFrame>
            <S.FirstMessage>
              Seja muito bem-vindo! <br />
              Neste site, você vai poder agendar sua consulta, ter conhecimento
              do meu trabalho, dos equipamentos que utilizo assim como me
              conhecer melhor
            </S.FirstMessage>
            <S.SecondMessage>
              Espero que possamos ter uma próspera relação de cuidados à sua
              saúde e bem-estar.
            </S.SecondMessage>
            <S.ButtonContainer>
              <Button variant='socialMedia' iconTheme='whatsapp'>
                <S.ButtonContent>
                  <S.IconFrame>
                    <S.Icon src='src/assets/whatsapp-icon-white.png' />
                  </S.IconFrame>
                  Agende sua consulta
                </S.ButtonContent>
              </Button>
            </S.ButtonContainer>
          </S.IntroFrame>
          <S.PortraitFrame
            src='src/assets/bottom-right-frame.png'
            alt='frame-bottom-right'
            $coordinate='bottom'
          />
        </S.IntroContent>
        <S.CoverPhoto src='src/assets/cover-photo.jpg' alt='cover-photo' />
      </S.GreetingsContent>
    </S.Container>
  )
}

export default Greetings
