import React from 'react'
import styled from 'styled-components'

interface CategoryLabelProps {
  active?: boolean
  label: string | number
}

const CategoryLabelWrapper = styled.button<{ active: boolean }>`
  align-items: center;
  border-radius: 10px;
  background-color: ${({ active }) => (active ? '#4661E6' : '#f2f4ff')};
  border: none;
  color: ${({ active }) => (active ? '#ffffff' : '#4661e6')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 13px;
  justify-content: center;
  line-height: 19px;
  padding: 6px 16px;

  :hover {
    background-color: #cfd7ff;
  }
`

export const CategoryLabel: React.FC<CategoryLabelProps> = ({
  active = false,
  label,
}) => {
  return (
    <CategoryLabelWrapper active={active}>
      <span>{label}</span>
    </CategoryLabelWrapper>
  )
}
