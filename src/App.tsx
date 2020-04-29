import React from 'react'
import { AllStatBlocks } from './components/AllStatBlocks'
import { SearchBar } from './components/SearchBar'
import './App.css'
import * as characterData from './data.json'

const App = () => {
  return (
    <div>
      {/* <SearchBar characterData={characterData} /> */}
      <AllStatBlocks characterData={characterData} />
    </div>
  )
}

export default App
