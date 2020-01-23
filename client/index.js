import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/routers/App'

console.log('CLIENT : meteor est lancée')

ReactDOM.render(
    <App />,
    document.getElementById('root')
)