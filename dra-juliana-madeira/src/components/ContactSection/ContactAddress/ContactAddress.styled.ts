import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../helpers/breakpoints.helpers'

export const CardContainer = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  aspect-ratio: 2 / 1;
  width: fit-content;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.8rem;
  padding: 0.5rem 1.5rem;
  line-height: 24px;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (${devices.sm}) {
    row-gap: 0.4rem;
    padding: 1rem 2rem;
    line-height: 1rem;
    font-size: 0.875rem;
  }
`
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const AddressContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Image = styled.img`
  aspect-ratio: 7.6/1;
  width: 17.5rem;
  margin-bottom: 1.5rem;

  @media screen and (${devices.sm}) {
    width: 15rem;
    margin-bottom: 0.4rem;
  }
`

export const InformationParagraph = styled.p`
  @media screen and (${devices.sm}) {
    margin: 0.5rem 0;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
  flex-wrap: wrap;
`

export const IconTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
`

export const AddressContainerFrame = styled.div`
  aspect-ratio: 2/1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.5rem 1.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  text-align: center;
  line-height: 40px;
`

export const TextParagraph = styled.p`
  text-align: justify;
  padding-left: 1.5rem;

  @media screen and (${devices.sm}) {
    row-gap: 0.4rem;
    line-height: 2rem;
    font-size: 0.875rem;
  }
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
