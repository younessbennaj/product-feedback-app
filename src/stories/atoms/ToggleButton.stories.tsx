import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { UpVoteToggleButton } from '../../components/atoms/ToggleButton'

export default {
  component: UpVoteToggleButton,
  decorators: [withDesign],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
  title: 'DefaultUpVoteToggleButton',
}

export const DefaultUpVoteToggleButton = () => <UpVoteToggleButton label={99} />

DefaultUpVoteToggleButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2456',
  },
}

export const HoveredUpVoteToggleButton = () => <UpVoteToggleButton label={99} />

HoveredUpVoteToggleButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2463',
  },
  pseudo: { hover: true },
}

export const ActivatedUpVoteToggleButton = () => (
  <UpVoteToggleButton active label={100} />
)

ActivatedUpVoteToggleButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2467',
  },
}

export const ToggleButtonWithSmallScreen = () => (
  <UpVoteToggleButton label={112} />
)

ToggleButtonWithSmallScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A351',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
}
