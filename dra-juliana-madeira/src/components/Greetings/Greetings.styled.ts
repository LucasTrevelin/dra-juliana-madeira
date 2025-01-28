import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -6.25rem;
  padding-top: 6.25rem;
`

export const Greetings = styled(motion.h1)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  @media screen and (${devices.headerBreak}) {
    font-size: 2rem;
  }
`

export const GreetingsContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 10rem;

  @media screen and (${devices.greetingsSmBreak}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const IntroContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  padding: 1.5rem;
`

export const PortraitFrame = styled(motion.img)<{
  $coordinate: 'up' | 'bottom'
}>`
  position: absolute;
  top: ${({ $coordinate }) => $coordinate === 'up' && 0};
  left: ${({ $coordinate }) => $coordinate === 'up' && 0};
  bottom: ${({ $coordinate }) => $coordinate === 'bottom' && 0};
  right: ${({ $coordinate }) => $coordinate === 'bottom' && 0};
`

export const IntroFrame = styled(motion.main)`
  border-radius: 0 20px 0 20px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  row-gap: 1.5rem;
  height: 480px;
  aspect-ratio: 0.75/1;
  @media screen and (${devices.greetingsMaxBreak}) {
    height: 380px;
    padding: 1.5rem;
  }

  @media screen and (${devices.greetingsMidBreak}) {
    height: 300px;
    padding: 1rem;
  }
`

export const FirstMessage = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  text-align: left;
  line-height: 2.5rem;
  @media screen and (${devices.greetingsMaxBreak}) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
  @media screen and (${devices.greetingsMidBreak}) {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`

export const SecondMessage = styled.span`
  color: ${({ theme }) => theme.colors.redHighlight};
  font-size: 1.25rem;
  text-align: justify;
  line-height: 1.75rem;
  font-family: 'Open Sans', sans-serif;

  @media screen and (${devices.greetingsMaxBreak}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media screen and (${devices.greetingsMidBreak}) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
export const CoverPhoto = styled(motion.img)`
  height: 580px;
  @media screen and (${devices.greetingsMaxBreak}) {
    height: 450px;
  }
  @media screen and (${devices.greetingsMidBreak}) {
    height: 370px;
  }
`

export const ButtonContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  color: inherit;
  text-decoration: none;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`

export const IconFrame = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenWhatsApp};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

export const Icon = styled.img`
  width: 1.5rem;
`
