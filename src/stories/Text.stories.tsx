import React from 'react'

import { Text } from '../components/Text'

export default {
  component: Text,
  title: 'Text',
}

export const DefaultText = () => (
  <Text size='md'>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
    dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
    viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
    mollis.
  </Text>
)

DefaultText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2527',
  },
}
