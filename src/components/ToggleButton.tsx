import React from 'react'
import styled from 'styled-components'

import icon from '../assets/icon-arrow-up.svg'

interface ToggleButtonProps {
  active?: boolean
  label: string | number
}

const ToggleButtonWrapper = styled.button<{
  active: boolean
  withIcon: boolean
}>`
  align-items: center;
  background: ${({ active }) => (active ? '#4661E6' : '#f2f4ff')};
  border: none;
  border-radius: 10px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#3a4374')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 13px;
  justify-content: center;
  line-height: 19px;
  padding-bottom: 8px;
  padding-top: 14px;
  width: 40px;

  :hover {
    background-color: ${({ active }) => (active ? '#4661e6' : '#cfd7ff')};
  }

  .icon {
    background-color: ${({ active }) => (active ? '#fff' : '#4661e6')};
    height: 7px;
    -webkit-mask: url(${icon}) no-repeat center;
    mask: url(${icon}) no-repeat center;
    margin-bottom: 8px;
    width: 10px;
  }
`

export const UpVoteToggleButton: React.FC<ToggleButtonProps> = ({
  active = false,
  label,
}) => {
  return (
    <ToggleButtonWrapper active={active} aria-label='upvote' withIcon={!!icon}>
      <div className='icon'></div>
      <span>{label}</span>
    </ToggleButtonWrapper>
  )
}
