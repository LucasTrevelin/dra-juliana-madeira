export type TSpecialLinksProps = {
  $variant?: 'hamburguer-highlight' | 'hamburguer'
}

export type TLinkProps = {
  title: string
  variant?: TSpecialLinksProps['$variant']
  additionalAction?: VoidFunction
}
