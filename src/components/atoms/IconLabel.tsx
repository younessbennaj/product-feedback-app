import React from 'react'
import styled from 'styled-components'
import { PositionProps } from 'styled-system'

import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'
import { Flex } from './Flex'

const IconLabelWrapper = styled(Flex)`
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  svg {
    transform: scale(1.3);
  }
`

export const IconLabel: React.FC<PositionProps> = (props) => {
  return (
    <IconLabelWrapper
      alignItems='center'
      borderRadius='50%'
      height={['40px', '56px']}
      justifyContent='center'
      width={['40px', '56px']}
      {...props}
    >
      <IconPlus />
    </IconLabelWrapper>
  )
}
