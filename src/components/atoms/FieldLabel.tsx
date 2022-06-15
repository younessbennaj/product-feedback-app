import React from 'react'

import { Text } from '../atoms/Text'

export const FieldLabel: React.FC<{
  htmlFor?: string
  label: string
  subLabel: string
}> = ({ htmlFor, label, subLabel }) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        <Text fontSize={['13px', '14px']} fontWeight={700} mb='2px'>
          {label}
        </Text>
      </label>
      <Text color='grey' fontSize={['13px', '14px']} mb='16px'>
        {subLabel}
      </Text>
    </>
  )
}
