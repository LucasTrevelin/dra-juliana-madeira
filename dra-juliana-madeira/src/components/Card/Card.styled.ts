import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  max-width: 250px;
  position: relative;
  flex-shrink: 0;
`

export const Image = styled.img`
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  width: 15.625rem;
  border-bottom: 1px solid #000000;
  max-width: fit-content;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  row-gap: 0.5rem;
`

export const CardTitle = styled.h1`
  font-size: 1.25rem;
  margin: 0;
`

export const CardText = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  text-overflow: ellipsis;
`
