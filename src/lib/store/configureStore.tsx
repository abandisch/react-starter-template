import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const configureStore = () => {
  const middleware: any[] = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

  return createStore(
    reducer,
    // persistedState, // add persistedState before the enhancer, i.e. applyMiddleware
    applyMiddleware(...middleware)
  )
}

export default configureStore
