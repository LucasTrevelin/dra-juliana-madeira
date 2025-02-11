import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 3px;
`

export const Title = styled.h1`
  font-weight: bold;
  line-height: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary};
`

export const Disclaimer = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
