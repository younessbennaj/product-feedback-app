import { FormikHandlers } from 'formik'
import React from 'react'

import { SelectField } from '../atoms/SelectField'
import { Text } from '../atoms/Text'

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
      <label htmlFor='category'>
        <Text fontWeight={700} mb='2px'>
          Category
        </Text>
      </label>
      <Text color='grey' mb='16px'>
        Choose a category for your feedback
      </Text>
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
