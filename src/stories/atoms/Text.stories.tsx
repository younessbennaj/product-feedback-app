import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'

import { Text } from '../../components/atoms/Text'

export default {
  component: Text,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
  title: 'Text',
}

export const DefaultText = () => (
  <Text>
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

export const MediumText = () => (
  <Text size='md'>
    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
    metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
    quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
    semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
    neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
  </Text>
)

MediumText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2530',
  },
}

export const DefaultTextWithSmallScreen = () => (
  <Text>
    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
    metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
    quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
    semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
    neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
  </Text>
)

DefaultTextWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=387%3A2',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}

export const MediumTextWithSmallScreen = () => (
  <Text size='md'>
    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
    metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
    quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
    semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
    neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
  </Text>
)

MediumTextWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=387%3A2',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}
