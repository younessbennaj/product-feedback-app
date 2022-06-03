import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { SuggestionsListItem } from '../../components/molecules/SuggestionsListItem'

export default {
  component: SuggestionsListItem,
  decorators: [withDesign],
  parameters: {
    backgrounds: { default: 'ghost-white' },
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
  title: 'SuggestionsListItem',
}

const componentProps = {
  category: 'enhancement',
  commentsCount: 2,
  description: 'Easier to search for solutions based on a specific stack.',
  title: 'Add tags for solutions',
  upvotes: 112,
}

export const SuggestionsListItemWithSmallScreen = () => (
  <SuggestionsListItem {...componentProps} />
)

SuggestionsListItemWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A345',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const SuggestionsListItemWithMediumScreen = () => (
  <SuggestionsListItem {...componentProps} />
)

SuggestionsListItemWithMediumScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2701',
  },
  viewport: {
    defaultViewport: 'ipad',
  },
}

export const SuggestionsListItemWithLargeScreen = () => (
  <SuggestionsListItem {...componentProps} />
)

SuggestionsListItemWithLargeScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2190',
  },
}

export const SuggestionsListItemWithHoverState = () => (
  <SuggestionsListItem {...componentProps} />
)

SuggestionsListItemWithHoverState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A1633',
  },
  pseudo: { hover: true },
}
