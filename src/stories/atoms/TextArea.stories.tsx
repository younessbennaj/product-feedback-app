import React from 'react'

import { TextAreaField } from '../../components/atoms/TextArea'

export default {
  component: TextAreaField,
  title: 'TextAreaField',
}

export const DefaultTextArea = () => <TextAreaField />

DefaultTextArea.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A1996',
  },
}

export const TextAreaWithActiveState = () => (
  <TextAreaField
    value={'Health benefits aside, I just like the darker aesthetic it brings'}
  />
)

TextAreaWithActiveState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A1418',
  },
  pseudo: { focus: true },
}

export const TextAreaWithErrorState = () => (
  <TextAreaField errorMessage="Can't be empty" value={''} />
)

TextAreaWithErrorState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A1262',
  },
}
