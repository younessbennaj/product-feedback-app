import React from 'react'
import styled from 'styled-components'

interface CategoryLabelProps {
  active?: boolean
  label: string | number
}

const CategoryLabelWrapper = styled.span`
  border-radius: 10px;
  background-color: #f2f4ff;
  border: none;
  color: #4661e6;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  padding: 6px 16px;
`

export const CategoryLabel: React.FC<CategoryLabelProps> = ({ label }) => {
  return <CategoryLabelWrapper>{label}</CategoryLabelWrapper>
}
