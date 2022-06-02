import React from 'react'
import styled from 'styled-components'

import icon from '../../assets/icon-arrow-up.svg'

interface ToggleButtonProps {
  active?: boolean
  label: string | number
}

const ToggleButtonWrapper = styled.button<{
  active: boolean
  isSmallScren: boolean
  withIcon: boolean
}>`
  align-items: center;
  background: ${({ active }) => (active ? '#4661E6' : '#f2f4ff')};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 19px;
  padding: 6px 12px 6px 16px;
  width: auto;

  span {
    color: ${({ active }) => (active ? '#FFFFFF' : '#3a4374')};
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
  }

  @media (min-width: 600px) {
    flex-direction: column;
    padding: 14px 0px 8px 0px;
    width: 40px;
  }

  :hover {
    background-color: ${({ active }) => (active ? '#4661e6' : '#cfd7ff')};
  }

  .icon {
    background-color: ${({ active }) => (active ? '#fff' : '#4661e6')};
    height: 7px;
    -webkit-mask: url(${icon}) no-repeat center;
    mask: url(${icon}) no-repeat center;
    margin-bottom: 0px;
    margin-right: 10px;
    width: 10px;

    @media (min-width: 600px) {
      margin-bottom: 8px;
      margin-right: 0px;
    }
  }
`

export const UpVoteToggleButton: React.FC<ToggleButtonProps> = ({
  active = false,
  label,
}) => {
  return (
    <ToggleButtonWrapper
      active={active}
      aria-label='upvote'
      isSmallScren={true}
      withIcon={!!icon}
    >
      <div className='icon'></div>
      <span>{label}</span>
    </ToggleButtonWrapper>
  )
}
