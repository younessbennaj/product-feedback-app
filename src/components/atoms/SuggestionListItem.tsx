import React from 'react'

import { capitalizeFirstLetter } from '../../utils'

type SuggestionListItemProps = {
  category: string
  commentsCount: number
  description: string
  title: string
  upvotes: number
}

export const SuggestionListItem: React.FC<SuggestionListItemProps> = ({
  category,
  commentsCount,
  description,
  title,
  upvotes,
}) => {
  return (
    <li>
      <button aria-label='upvote'>{upvotes}</button>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{capitalizeFirstLetter(category)}</span>
      <button aria-label='comments'>{commentsCount}</button>
    </li>
  )
}
