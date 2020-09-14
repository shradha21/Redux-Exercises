import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { increment, decrement } from './actions/countAction'
// the provider component will make the store available to all the components
import { Provider } from 'react-redux'  //npm install react-redux


import configureStore from './store/configureStore'


const store = configureStore()
console.log('redux initial store',store.getState()) 

store.subscribe(() => {
  console.log('store updated',store.getState())
})



// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())

const jsx= (
  <Provider store= {store}>
    <App />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

  
 
