import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals'

import App from './App'

import DisableButton from './challenges/disable-button'
import ProgressBar from './challenges/progress-bar'
import Api from './challenges/api'
import LoadMore from './challenges/load-more'
import MultiSelect from './challenges/multi-select'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/react-challenges" element={<App />} />
        <Route path="/react-challenges/disable-button" index element={<DisableButton />} />
        <Route path="/react-challenges/progress-bar" index element={<ProgressBar />} />
        <Route path="/react-challenges/api" index element={<Api />} />
        <Route path="/react-challenges/load-more" index element={<LoadMore />} />
        <Route path="/react-challenges/multi-select" index element={<MultiSelect />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here! Go back.</p>
            </main>
          }
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter >
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
