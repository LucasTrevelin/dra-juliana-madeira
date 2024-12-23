import styled, { CSSProperties } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  max-width: 1536px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Section = styled.section<{
  $flexDirection?: CSSProperties['flexDirection']
  $justifyContent?: CSSProperties['justifyContent']
  $margin?: CSSProperties['margin']
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: center;
  width: 80%;
  margin: ${({ $margin }) => $margin || '0'};
`
