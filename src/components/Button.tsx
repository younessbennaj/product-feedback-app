import React from 'react'

interface ButtonProps {
  children: string
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button>
      <a href='#'>{children}</a>
    </button>
  )
}
