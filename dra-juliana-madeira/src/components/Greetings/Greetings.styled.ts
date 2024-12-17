import styled, { CSSProperties } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Greetings = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
`
export const IntroFrame = styled.main`
  border-radius: 0 20px 0 20px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  row-gap: 1rem;
  height: 470.55px;
  aspect-ratio: 0.75/1;
`

export const FirstMessage = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  text-align: left;
  line-height: 2.5rem;
`

export const SecondMessage = styled.span`
  color: ${({ theme }) => theme.colors.redHighlight};
  font-size: 1.25rem;
  text-align: justify;
  line-height: 1.75rem;
  font-family: 'Open Sans', sans-serif;
`
