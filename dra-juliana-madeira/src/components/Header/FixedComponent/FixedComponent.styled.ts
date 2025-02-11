import styled, { css } from 'styled-components'

const centralizerProps = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  flex: 1;
`

export const Container = styled.header`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  ${centralizerProps};
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
`

export const TitleContainer = styled.div`
  ${centralizerProps};
  column-gap: 0.8rem;
`
export const Icon = styled.img`
  aspect-ratio: 1/1;
  width: 22px;
`

export const Title = styled.p`
  font-size: 1.25rem;
`

export const Divider = styled.span`
  min-height: 11px;
  height: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`
