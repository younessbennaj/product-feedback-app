import React from 'react'

import { InputField } from '../../components/atoms/InputField'

export default {
  component: InputField,
  title: 'InputField',
}

export const DefaultInputField = () => <InputField />

DefaultInputField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=672%3A2',
  },
}

export const InputFieldWithText = () => <InputField value='Lorem ipsum dolor' />

InputFieldWithText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=689%3A3',
  },
}

export const InputFieldWithActiveState = () => (
  <InputField value='Lorem ipsum dolor' />
)

InputFieldWithActiveState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2617',
  },
  pseudo: { focus: true },
}

export const InputFieldWithErrorState = () => (
  <InputField errorMessage="Can't be empty" value={''} />
)

InputFieldWithErrorState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2610',
  },
}
