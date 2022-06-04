import React from 'react'

export const SuggestionsFormPage: React.FC = () => {
  return (
    <section>
      <button>
        <span>Go Back</span>
      </button>
      <h3>Create New Feedback</h3>
      <form aria-label='suggestion-form'>
        <div>
          <label htmlFor='title'>Feedback Title</label>
          <input id='title' />
        </div>
        <div>
          <label htmlFor='category'>Category</label>
          <input id='category' />
        </div>
        <div>
          <label htmlFor='description'>Feedback Detail</label>
          <input id='description' />
        </div>
        <button>
          <span>Cancel</span>
        </button>
        <button>
          <span>Add Feedback</span>
        </button>
      </form>
    </section>
  )
}
