import {configureStore} from '@reduxjs/toolkit'
import auth from '../features/auth/auth'
import calculator from '../features/calculator/calculator'

export default configureStore({
  reducer: {
    auth,
    calculator,
  },
})
