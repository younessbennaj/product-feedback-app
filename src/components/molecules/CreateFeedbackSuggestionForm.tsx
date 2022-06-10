import { Formik } from 'formik'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductFeedbackType } from '../../types'
import { Box } from '../atoms/Box'
import { Button } from '../atoms/Button'
import { Flex } from '../atoms/Flex'
import { InputField } from '../atoms/InputField'
import { SelectField } from '../atoms/SelectField'
import { Text } from '../atoms/Text'
import { TextAreaField } from '../atoms/TextAreaField'

type FormErrorsType = {
  category?: string
  description?: string
  title?: string
}

type FormValuesType = {
  category?: string
  description?: string
  title?: string
}

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
              <label htmlFor='title'>
                <Text fontWeight={700} mb='2px'>
                  Feedback Title
                </Text>
              </label>
              <Text color='grey' mb='16px'>
                Add a short, descriptive headline
              </Text>
              <InputField
                errorMessage={errors.title && touched.title ? errors.title : ''}
                id='title'
                name='title'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
              />
            </Box>
            <Box mb='16px'>
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
                value={values.category}
              />
            </Box>
            <Box mb='32px'>
              <label htmlFor='description'>
                <Text fontWeight={700} mb='2px'>
                  Feedback Detail
                </Text>
              </label>
              <Text color='grey' mb='16px'>
                Include any specific comments on what should be improved, added,
                etc.
              </Text>
              <TextAreaField
                errorMessage={
                  errors.description && touched.description
                    ? errors.description
                    : ''
                }
                id='description'
                name='description'
                onBlur={handleBlur}
                onChange={handleChange}
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
