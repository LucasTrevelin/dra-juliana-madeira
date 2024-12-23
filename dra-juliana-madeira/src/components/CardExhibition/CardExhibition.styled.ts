import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

const titleAlignMapper = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
}

export const Container = styled(motion.div)`
  aspect-ratio: 2/1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding-top: 6.25rem; /* Adjust according to the desired space */
  margin-top: -6.25rem; /* This counteracts the padding */
`

export const TitleContainer = styled.div<{
  $titleAlign: 'left' | 'center' | 'right'
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ $titleAlign }) => titleAlignMapper[$titleAlign]};
`

export const Title = styled.h1<{ $titleColor?: string }>`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: left;
  color: ${({ theme, $titleColor }) => $titleColor || theme.colors.black};
  margin: 0.5rem;

  @media screen and (${devices.headerBreak}) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0.5rem;

  @media screen and (${devices.headerBreak}) {
    font-size: 1rem;
  }
`

export const BoxContainer = styled.div<{ $boxColor?: string }>`
  min-width: 100%;
  width: 100%;
  row-gap: 1rem;
  background-color: ${({ theme, $boxColor }) =>
    $boxColor || theme.colors.primary};
  overflow-x: auto;
  padding: 2rem 1rem;
`
export const CardContainer = styled.div<{
  $align: 'center' | 'flex-start' | 'flex-end'
}>`
  display: flex;
  justify-content: ${({ $align }) => $align};
  gap: 2rem;

  @media screen and (${devices.headerBreak}) {
    justify-content: flex-start;
  }
`
