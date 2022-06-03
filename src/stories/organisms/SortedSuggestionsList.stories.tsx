import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { SortedSuggestionsList } from '../../components/organisms/SortedSuggestionsList'
import { productFeedbackFiltredBySuggestionStatusSortedByScore } from './__mocks__/index'

export default {
  component: SortedSuggestionsList,
  decorators: [withDesign],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
  title: 'SortedSuggestionsList',
}

const componentProps = {
  sortedSuggestions: productFeedbackFiltredBySuggestionStatusSortedByScore,
}

export const SortedSuggestionsListWithSmallScreen = () => (
  <SortedSuggestionsList {...componentProps} />
)

SortedSuggestionsListWithSmallScreen.parameters = {
  backgrounds: { default: 'ghost-white' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=54%3A4',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const SortedSuggestionsListWithMediumScreen = () => (
  <SortedSuggestionsList {...componentProps} />
)

SortedSuggestionsListWithMediumScreen.parameters = {
  backgrounds: { default: 'ghost-white' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=54%3A3',
  },
  viewport: {
    defaultViewport: 'ipad',
  },
}

export const SortedSuggestionsListWithLargeScreen = () => (
  <SortedSuggestionsList {...componentProps} />
)

SortedSuggestionsListWithLargeScreen.parameters = {
  backgrounds: { default: 'ghost-white' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=54%3A2',
  },
}
