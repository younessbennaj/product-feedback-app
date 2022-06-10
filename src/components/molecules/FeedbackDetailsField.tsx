import { FormikHandlers } from 'formik'
import React from 'react'

import { FieldLabel } from '../atoms/FieldLabel'
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
      <FieldLabel
        htmlFor='description'
        label='Feedback Detail'
        subLabel='Include any specific comments on what should be improved, added, etc.'
      />
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
