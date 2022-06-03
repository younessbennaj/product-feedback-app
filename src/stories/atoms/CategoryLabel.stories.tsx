import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { CategoryLabel } from '../../components/atoms/CategoryLabel'

export default {
  component: CategoryLabel,
  decorators: [withDesign],
  title: 'CategoryLabel',
}

export const DefaultCategoryLabel = () => <CategoryLabel label={'UX'} />

DefaultCategoryLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2481',
  },
}
