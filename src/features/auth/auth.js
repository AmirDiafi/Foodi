import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogedIn: false,
  },
  reducers: {
    login: state => {
      state.isLogedIn = true
    },
    logout: state => {
      state.isLogedIn = false
    },
  },
})

export const {login} = counterSlice.actions

export default counterSlice.reducer
