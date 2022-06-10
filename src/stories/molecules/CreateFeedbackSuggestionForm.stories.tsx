import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { withDesign } from 'storybook-addon-designs'

import { CreateFeedbackSuggestionForm } from '../../components/molecules/CreateFeedbackSuggestionForm'

export default {
  component: CreateFeedbackSuggestionForm,
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
  title: 'CreateFeedbackSuggestionForm',
}

export const CreateFeedbackSuggestionFormWithSmallScreen = () => (
  <CreateFeedbackSuggestionForm
    addNewSuggestion={() => null}
    onSubmit={() => null}
  />
)

CreateFeedbackSuggestionFormWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=811%3A2',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const CreateFeedbackSuggestionFormWithMediumScreen = () => (
  <CreateFeedbackSuggestionForm
    addNewSuggestion={() => null}
    onSubmit={() => null}
  />
)

CreateFeedbackSuggestionFormWithMediumScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=868%3A2',
  },
  viewport: {
    defaultViewport: 'ipad',
  },
}
