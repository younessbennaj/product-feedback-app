import React from 'react'

import { Heading } from '../components/Heading'

export default {
  component: Heading,
  title: 'Heading',
}

export const ExtraLargeHeading = () => (
  <Heading as='h1'>Sed egestas ante et vulputate volutpat</Heading>
)

ExtraLargeHeading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2520',
  },
}

export const LargeHeading = () => (
  <Heading as='h2'>Vestibulum volutpat acus a ultrices sagittis</Heading>
)

LargeHeading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2517',
  },
}

export const MediumHeading = () => (
  <Heading as='h3'>
    Pellentesque a diam sit amet mi ullamcorper vehicula
  </Heading>
)

MediumHeading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2514',
  },
}

export const SmallHeading = () => (
  <Heading as='h4'>Ut scelerisque hendrerit tellus. Integer sagittis</Heading>
)

SmallHeading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2514',
  },
}
