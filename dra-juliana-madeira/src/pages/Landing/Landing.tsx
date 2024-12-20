import React from 'react'
import Header from '../../components/Header/Header'
import * as S from './Landing.styles'
import Greetings from '../../components/Greetings/Greetings'
import FixedComponent from '../../components/Header/FixedComponent/FixedComponent'
import Welcome from '../../components/Welcome/Welcome'
import { theme } from '../../global.styled'
import CardExhibition from '../../components/CardExhibition/CardExhibition'
import { treatmentsConstants } from '../../components/CardExhibition/TreatmentsConstants'
import { equipmentsConstants } from '../../components/CardExhibition/EquipmentConstants'
import About from '../../components/About/About'
import { ContactSection } from '../../components/ContactSection'

const Landing: React.FC = () => {
  return (
    <S.Container>
      <FixedComponent />
      <Header />
      <S.Section $justifyContent='center' $margin='5rem 0'>
        <Greetings />
      </S.Section>
      <S.Section $justifyContent='center' $margin='5rem 0'>
        <Welcome />
      </S.Section>
      <S.Section $margin='2rem 0'>
        <CardExhibition
          title='Tratamentos oferecidos'
          subtitle='Conheça os tratamentos oferecidos pela clínica'
          titleAlign='left'
          cardsConstants={treatmentsConstants}
        />
      </S.Section>
      <S.Section $margin='2rem 0'>
        <CardExhibition
          title='Equipamentos'
          subtitle='Conheça os equipamentos a serviço da clínica'
          titleAlign='right'
          titleColor={theme.colors.primary}
          boxColor={theme.colors.secondary}
          cardsConstants={equipmentsConstants}
        />
      </S.Section>
      <S.Section $margin='2rem 0'>
        <About />
      </S.Section>

      <S.Section $margin='10rem 0'>
        <ContactSection />
      </S.Section>
    </S.Container>
  )
}

export default Landing
