import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-top: -6.25rem;
  padding-top: 6.25rem;

  @media screen and (${devices.headerBreak}) {
    display: none;
  }
`

export const SmallDevicesContainer = styled(motion.div)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: -6.25rem;
  padding-top: 6.25rem;

  @media screen and (${devices.headerBreak}) {
    display: flex;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  max-width: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (${devices.headerBreak}) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.875rem;
  text-align: justify;
`

export const Image = styled.img`
  aspect-ratio: 0.75/1;
  width: 30%;

  @media screen and (${devices.headerBreak}) {
    width: 50%;
  }
`
