import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

describe('App', () => {
  it('shoumd render button element with correct wording', () => {
    const { getByRole } = render(<App />)
    const buttonElement = getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
