import React from 'react'

import { Button } from '../../components/atoms/Button'

export default {
  component: Button,
  title: 'Button',
}

export const PrimaryButton = () => (
  <Button variant='primary'>Add Feedback</Button>
)

PrimaryButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2002',
  },
}

export const PrimaryButtonWithHoverState = () => (
  <Button variant='primary'>Add Feedback</Button>
)

PrimaryButtonWithHoverState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A1270',
  },
  pseudo: { hover: true },
}

export const SecondaryButton = () => <Button variant='secondary'>Cancel</Button>

SecondaryButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2005',
  },
}

export const SecondaryButtonWithHoverState = () => (
  <Button variant='secondary'>Cancel</Button>
)

SecondaryButtonWithHoverState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2005',
  },
  pseudo: { hover: true },
}
