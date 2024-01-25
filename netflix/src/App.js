import React from 'react'
import Body from './Components/body Component.js/Body'
import appStore from './utils/Store/appStore'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body/>
        </Provider>
    </div>
  )
}

export default App
