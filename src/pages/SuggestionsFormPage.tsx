import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box } from '../components/atoms/Box'
import { Flex } from '../components/atoms/Flex'
import { InlineButton } from '../components/atoms/InlineButton'
import { FeedbackForm } from '../components/organisms/FeedbackForm'
import { ProductFeedbackType } from '../types'

type FormErrorsType = {
  category?: string
  description?: string
  title?: string
}

export const SuggestionsFormPageComponent: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
  onSubmit: (values: FormErrorsType) => void
}> = ({ addNewSuggestion, onSubmit }) => {
  const navigate = useNavigate()

  return (
    <Box as='section' px={['24px', '0px']}>
      <Box m='0 auto' maxWidth='540px' mt={['34px', '56px']}>
        <Flex alignItems='center' height='40px' mb='44px'>
          <InlineButton onClick={() => navigate('/')}>
            <span>Go Back</span>
          </InlineButton>
        </Flex>

        <FeedbackForm addNewSuggestion={addNewSuggestion} onSubmit={onSubmit} />
      </Box>
    </Box>
  )
}

export const SuggestionsFormPage: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
}> = ({ addNewSuggestion }) => {
  const navigate = useNavigate()

  const onSubmit = (values: FormErrorsType) => {
    axios.post('/product-feedbacks', values).then((res) => {
      addNewSuggestion(res.data.data)
      navigate('/')
    })
  }

  return (
    <SuggestionsFormPageComponent
      addNewSuggestion={addNewSuggestion}
      onSubmit={onSubmit}
    />
  )
}
