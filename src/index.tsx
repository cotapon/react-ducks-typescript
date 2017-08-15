import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import Counter from './counter/Container'
import Canvas from './canvas/Container'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Canvas />
  </Provider>
  , document.getElementById('root')
)
