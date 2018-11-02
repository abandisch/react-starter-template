import { init } from '@rematch/core'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import models from './models'

const configureStore = () => {
  const middlewares: any[] = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return init({
    models,
    redux: {
      middlewares
    }
  } as any)
}

export default configureStore
