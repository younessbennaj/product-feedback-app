import React from 'react'

import { SelectField } from '../../components/atoms/SelectField'

export default {
  component: SelectField,
  title: 'SelectField',
}

export const DefaultSelectField = () => <SelectField />

DefaultSelectField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2602',
  },
}
