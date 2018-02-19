import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

import './styles.less'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto Condensed:300,400', 'Roboto:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
