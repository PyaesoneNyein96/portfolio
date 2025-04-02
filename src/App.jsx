import React from 'react'
import ToggleTheme from './utils/ToggleTheme';

const App = () => {
  return (
    <div className='bg-amber-100 dark:bg-gray-800 dark:text-amber-50'>

      <ToggleTheme />
    </div>
  )
}

export default App