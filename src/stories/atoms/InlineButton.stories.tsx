import React from 'react'

import { InlineButton } from '../../components/atoms/InlineButton'

export default {
  component: InlineButton,
  title: 'InlineButton',
}

export const DefaultInlineButton = () => <InlineButton>Go Back</InlineButton>

DefaultInlineButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2575',
  },
}

export const InlineButtonWithHoverState = () => (
  <InlineButton>Go Back</InlineButton>
)

InlineButtonWithHoverState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2578',
  },
  pseudo: { hover: true },
}
