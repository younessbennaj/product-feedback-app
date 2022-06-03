import React from 'react'

import { CommentsCount } from '../../components/atoms/CommentsCount'

export default {
  component: CommentsCount,
  title: 'CommentsCount',
}

export const DefaultCommentsCount = () => <CommentsCount count={2} />

DefaultCommentsCount.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/csaK8VSg1ojbjr3lrqvSz3/product-feedback-app?node-id=0%3A2193',
  },
}
