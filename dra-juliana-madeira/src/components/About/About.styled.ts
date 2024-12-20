import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-top: -6.25rem;
  padding-top: 6.25rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 50%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
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
`
