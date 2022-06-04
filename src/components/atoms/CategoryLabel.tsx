import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

interface CategoryLabelProps {
  active?: boolean
  label: string | number
}

const CategoryLabelWrapper = styled.span`
  border-radius: 10px;
  background-color: #f2f4ff;
  border: none;
  color: #4661e6;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  padding: 6px 16px;
  ${space}
`

export const CategoryLabel: React.FC<CategoryLabelProps & SpaceProps> = ({
  label,
  ...props
}) => {
  return <CategoryLabelWrapper {...props}>{label}</CategoryLabelWrapper>
}
