import { FormikHandlers } from 'formik'
import React from 'react'

import { FieldLabel } from '../atoms/FieldLabel'
import { SelectField } from '../atoms/SelectField'

interface FeedbackCategorySelectProps {
  handleBlur: FormikHandlers['handleBlur']
  handleChange: FormikHandlers['handleChange']
  value: string
}

export const FeedbackCategorySelect: React.FC<FeedbackCategorySelectProps> = ({
  handleBlur,
  handleChange,
  value,
}) => {
  return (
    <>
      <FieldLabel
        htmlFor='category'
        label='Category'
        subLabel='Choose a category for your feedback'
      />
      <SelectField
        id='category'
        name='category'
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </>
  )
}
