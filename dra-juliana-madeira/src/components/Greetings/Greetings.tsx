import React from 'react'

import * as S from './Greetings.styled'
import Button from '../Button/Button'

const Greetings: React.FC = () => {
  return (
    <S.Container>
      <S.Greetings
        variants={{
          hiddenLeft: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        }}
        viewport={{ once: true }}
        initial='hiddenLeft'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
      >
        Olá, Paciente
      </S.Greetings>
      <S.GreetingsContent>
        <S.IntroContent>
          <S.PortraitFrame
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate='visible'
            viewport={{ once: true }}
            transition={{ ease: 'linear', delay: 0.3 }}
            src='assets/upper-left-frame.png'
            alt='frame-upper-left'
            $coordinate='up'
          />
          <S.IntroFrame
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate='visible'
            transition={{ ease: 'linear', delay: 0.3 }}
          >
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
                    <S.Icon src='assets/whatsapp-icon-white.png' />
                  </S.IconFrame>
                  Agende sua consulta
                </S.ButtonContent>
              </Button>
            </S.ButtonContainer>
          </S.IntroFrame>
          <S.PortraitFrame
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate='visible'
            viewport={{ once: true }}
            transition={{ ease: 'linear', delay: 0.3 }}
            src='assets/bottom-right-frame.png'
            alt='frame-bottom-right'
            $coordinate='bottom'
          />
        </S.IntroContent>
        <S.CoverPhoto
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate='visible'
          viewport={{ once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          src='assets/cover-photo.jpg'
          alt='cover-photo'
        />
      </S.GreetingsContent>
    </S.Container>
  )
}

export default Greetings
