import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  align-items: center;
  row-gap: 1rem;
  padding: 1.5rem;
  padding-top: 6.25rem; /* Adjust according to the desired space */
  margin-top: -6.25rem; /* This counteracts the padding */
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`

export const Disclaimer = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
