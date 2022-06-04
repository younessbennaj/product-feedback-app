import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../src/styles/theme'

import { GlobalStyle } from '../src/styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'ghost-white',
        value: '#F7F8FD',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
