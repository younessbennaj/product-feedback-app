import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { FieldLabel } from '../../components/atoms/FieldLabel'

export default {
  component: FieldLabel,
  decorators: [withDesign],
  title: 'FieldLabel',
}

export const FieldLabelWithSmallScreen = () => (
  <FieldLabel
    label='Feedback Title'
    subLabel='Add a short, descriptive headline'
  />
)

FieldLabelWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A104',
  },
}
