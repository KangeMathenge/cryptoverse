import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import 'antd/dist/antd.min.css'
import store from './app/store'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider> 
        </BrowserRouter>

)