import { FormikHandlers } from 'formik'
import React from 'react'

import { InputField } from '../atoms/InputField'
import { Text } from '../atoms/Text'

interface FeedbackTitleFieldProps {
  errorMessage: string
  handleBlur: FormikHandlers['handleBlur']
  handleChange: FormikHandlers['handleChange']
  value: string
}

export const FeedbackTitleField: React.FC<FeedbackTitleFieldProps> = ({
  errorMessage,
  handleBlur,
  handleChange,
  value,
}) => {
  return (
    <>
      <label htmlFor='title'>
        <Text fontWeight={700} mb='2px'>
          Feedback Title
        </Text>
      </label>
      <Text color='grey' mb='16px'>
        Add a short, descriptive headline
      </Text>
      <InputField
        errorMessage={errorMessage}
        id='title'
        name='title'
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </>
  )
}
