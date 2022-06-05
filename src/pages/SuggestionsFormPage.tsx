import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductFeedbackType } from '../types'

type FormErrorsType = {
  category?: string
  description?: string
  title?: string
}

export const SuggestionsFormPage: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
}> = ({ addNewSuggestion }) => {
  const navigate = useNavigate()

  return (
    <section>
      <button onClick={() => navigate('/')}>
        <span>Go Back</span>
      </button>
      <h3>Create New Feedback</h3>
      <Formik
        initialValues={{ category: 'feature', description: '', title: '' }}
        onSubmit={(values) => {
          axios.post('/product-feedbacks', values).then((res) => {
            addNewSuggestion(res.data.data)
            navigate('/')
          })
        }}
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
          console.log(touched)
          return (
            <form aria-label='suggestion-form' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='title'>Feedback Title</label>
                <input
                  id='title'
                  name='title'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                />
                {errors.title}
                {errors.title && touched.title && errors.title}
              </div>
              <div>
                <label htmlFor='category'>Category</label>
                <select
                  id='category'
                  name='category'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                >
                  <option value='feature'>Feature</option>
                  <option value='ui'>UI</option>
                  <option value='ux'>UX</option>
                  <option value='enhancement'>Enhancement</option>
                  <option value='bug'>Bug</option>
                </select>
                {errors.category && touched.category && errors.category}
              </div>
              <div>
                <label htmlFor='description'>Feedback Detail</label>
                <input
                  id='description'
                  name='description'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                />
                {errors.description &&
                  touched.description &&
                  errors.description}
              </div>
              <button onClick={() => navigate('/')}>
                <span>Cancel</span>
              </button>
              <button disabled={!dirty || !isValid} type='submit'>
                <span>Add Feedback</span>
              </button>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}
