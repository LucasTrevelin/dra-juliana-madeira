import styled, { CSSProperties } from 'styled-components'

export const Section = styled.section<{
  $flexDirection?: CSSProperties['flexDirection']
  $justifyContent?: CSSProperties['justifyContent']
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: center;
`
