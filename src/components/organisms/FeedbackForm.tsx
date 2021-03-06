import React from 'react'

import { FormValuesType, ProductFeedbackType } from '../../types'
import { Card } from '../atoms/Card'
import { Heading } from '../atoms/Heading'
import { IconLabel } from '../atoms/IconLabel'
import { CreateFeedbackSuggestionForm } from '../molecules/CreateFeedbackSuggestionForm'

export const FeedbackForm: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
  onSubmit: (values: FormValuesType) => void
}> = ({ addNewSuggestion, onSubmit }) => {
  return (
    <Card m='0 auto' maxWidth='540px' mt='20px' position='relative'>
      <IconLabel
        left={['24px', '42px']}
        position='absolute'
        top={['-20px', '-28px']}
      />
      <Heading as='h3' fontSize={['18px', '24px']} mb={['24px', '40px']}>
        Create New Feedback
      </Heading>
      <CreateFeedbackSuggestionForm
        addNewSuggestion={addNewSuggestion}
        onSubmit={onSubmit}
      />
    </Card>
  )
}
