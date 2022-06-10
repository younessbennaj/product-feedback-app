import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { withDesign } from 'storybook-addon-designs'

import { FeedbackForm } from '../../components/organisms/FeedbackForm'

export default {
  argTypes: { onSubmit: { action: 'submit' } },
  component: FeedbackForm,
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
  title: 'FeedbackForm',
}

export const FeedbackFormWithSmallScreen = () => (
  <FeedbackForm
    addNewSuggestion={action('new suggestion added')}
    onSubmit={action('form submitted')}
  />
)

FeedbackFormWithSmallScreen.parameters = {
  backgrounds: { default: 'ghost-white' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A153',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}
