import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SuggestionsFormPage } from './pages/SuggestionsFormPage'
import { SuggestionsPage } from './pages/SuggestionsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SuggestionsPage />} path='/' />
        <Route element={<SuggestionsFormPage />} path='/add-suggestion' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
