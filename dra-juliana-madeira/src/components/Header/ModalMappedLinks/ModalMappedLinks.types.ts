import { TLinkProps } from '../Link/Link.types'

export type TModalMappedLinksProps = {
  mappedLinks: TLinkProps[]
  isOpen: boolean
  additionalAction?: VoidFunction
}
