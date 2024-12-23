import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const ContactSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  flex: 1;
  margin-top: -15.25rem;
  padding-top: 15.25rem;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: min-content;
`

export const SectionTitle = styled.h1`
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};

  @media screen (${devices.headerBreak}) {
    font-size: 2rem;
  }
`
