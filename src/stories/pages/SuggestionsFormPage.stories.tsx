import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { withDesign } from 'storybook-addon-designs'

import { SuggestionsFormPageComponent as SuggestionsFormPage } from '../../pages/SuggestionsFormPage'

export default {
  argTypes: { onSubmit: { action: 'submit' } },
  component: SuggestionsFormPage,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
    withDesign,
  ],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
  title: 'SuggestionsFormPage',
}

export const SuggestionsFormPageWithSmallScreen = () => (
  <SuggestionsFormPage
    addNewSuggestion={action('new suggestion added')}
    onSubmit={action('form submitted')}
  />
)

SuggestionsFormPageWithSmallScreen.parameters = {
  backgrounds: { default: 'ghost-white' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=913%3A4',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}
