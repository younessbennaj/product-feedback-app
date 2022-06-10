import { Formik, FormikHandlers } from 'formik'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FormErrorsType,
  FormValuesType,
  ProductFeedbackType,
} from '../../types'
import { Box } from '../atoms/Box'
import { Button } from '../atoms/Button'
import { Flex } from '../atoms/Flex'
import { Text } from '../atoms/Text'
import { TextAreaField } from '../atoms/TextAreaField'
import { FeedbackCategorySelect } from './FeedbackCategorySelect'
import { FeedbackDetailsField } from './FeedbackDetailsField'
import { FeedbackTitleField } from './FeedbackTitleField'

interface CreateFeedbackSuggestionFormProps {
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
  onSubmit: (values: FormValuesType) => void
}

export const CreateFeedbackSuggestionForm: React.FC<
  CreateFeedbackSuggestionFormProps
> = ({ onSubmit }) => {
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{ category: 'feature', description: '', title: '' }}
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: FormErrorsType = {}

        if (!values.category) {
          errors.category = 'Can’t be empty'
        }

        if (!values.description) {
          errors.description = 'Can’t be empty'
        }

        if (!values.title) {
          errors.title = 'Can’t be empty'
        }

        return errors
      }}
    >
      {({
        dirty,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        touched,
        values,
      }) => {
        return (
          <form aria-label='suggestion-form' onSubmit={handleSubmit}>
            <Box mb='16px'>
              <FeedbackTitleField
                errorMessage={errors.title && touched.title ? errors.title : ''}
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.title}
              />
            </Box>
            <Box mb='16px'>
              <FeedbackCategorySelect
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.category}
              />
            </Box>
            <Box mb='32px'>
              <FeedbackDetailsField
                errorMessage={
                  errors.description && touched.description
                    ? errors.description
                    : ''
                }
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.description}
              />
            </Box>
            <Flex flexDirection='column'>
              <Box order={1}>
                <Button
                  onClick={() => navigate('/')}
                  variant='secondary'
                  width='100%'
                >
                  <span>Cancel</span>
                </Button>
              </Box>
              <Box mb='16px' order={0}>
                <Button
                  disabled={!dirty || !isValid}
                  type='submit'
                  variant='primary'
                  width='100%'
                >
                  <span>Add Feedback</span>
                </Button>
              </Box>
            </Flex>
          </form>
        )
      }}
    </Formik>
  )
}
