import { FormikHandlers } from 'formik'
import React from 'react'

import { FieldLabel } from '../atoms/FieldLabel'
import { InputField } from '../atoms/InputField'

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
      <FieldLabel
        htmlFor='title'
        label='Feedback Title'
        subLabel='Add a short, descriptive headline'
      />
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
