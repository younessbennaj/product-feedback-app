import { FormikHandlers } from 'formik'
import React from 'react'

import { Text } from '../atoms/Text'
import { TextAreaField } from '../atoms/TextAreaField'

interface FeedbackDetailsFieldProps {
  errorMessage: string
  handleBlur: FormikHandlers['handleBlur']
  handleChange: FormikHandlers['handleChange']
  value: string
}

export const FeedbackDetailsField: React.FC<FeedbackDetailsFieldProps> = ({
  errorMessage,
  handleBlur,
  handleChange,
  value,
}) => {
  return (
    <>
      <label htmlFor='description'>
        <Text fontWeight={700} mb='2px'>
          Feedback Detail
        </Text>
      </label>
      <Text color='grey' mb='16px'>
        Include any specific comments on what should be improved, added, etc.
      </Text>
      <TextAreaField
        errorMessage={errorMessage}
        id='description'
        name='description'
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </>
  )
}
