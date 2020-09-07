import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import ConfigRoute from './router'
import './styles/tailwind.css'
import 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>{ConfigRoute}</React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
