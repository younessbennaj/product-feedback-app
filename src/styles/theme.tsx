const breakpoints = ['600px', '900px', '1024px']

export const theme = {
  breakpoints,
  colors: {
    jewelCave: '#3A4374',
    rainbowFish: '#4661e6',
  },
  mediaQueries: {
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    small: `@media screen and (min-width: ${breakpoints[0]})`,
  },
}
