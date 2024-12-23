export const breakpoints = {
  sm: '640px',
  greetingsBreak: '950px',
  md: '1024px',
  lg: '1024px',
  greetingsSmBreak: '929px',
  greetingsMidBreak: '1112px',
  greetingsMaxBreak: '1362px'
}

export const devices = {
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  greetingsSmBreak: `(max-width: ${breakpoints.greetingsSmBreak})`,
  greetingsMidBreak: `(max-width: ${breakpoints.greetingsMidBreak})`,
  greetingsMaxBreak: `(max-width: ${breakpoints.greetingsMaxBreak})`
}
