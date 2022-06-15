import React from 'react'

import { Card } from '../../components/atoms/Card'
import { Text } from '../../components/atoms/Text'

export default {
  component: Card,
  title: 'Card',
}

export const DefaultCard = () => (
  <Card>
    <Text>Card</Text>
  </Card>
)

DefaultCard.parameters = {
  backgrounds: { default: 'ghost-white' },
}
