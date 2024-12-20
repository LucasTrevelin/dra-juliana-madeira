import styled from 'styled-components'

export const ContactSection = styled.section`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  height: 17.7rem;
  flex: 1;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`

export const SectionTitle = styled.h1`
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`
