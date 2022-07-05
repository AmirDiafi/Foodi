import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'calculator',
  initialState: {
    breadItemsCount: 0,
    milkItemsCount: 0,
    butterItemsCount: 0,
    inBasketIds: [],
    allInbox: 0,
  },
  reducers: {
    buyButter: (state, action) => {
      const {id: itemId, plus, clear} = action.payload
      if (plus) {
        state.butterItemsCount += 1
        state.allInbox += 1
        state.inBasketIds = [...new Set([...state.inBasketIds, itemId])]
      } else {
        if (clear) {
          state.allInbox -= state.butterItemsCount
          state.butterItemsCount = 0
        } else {
          state.allInbox -= 1
          state.butterItemsCount -= 1
        }
        //zero and not the real value because we modiefied it above
        if (state.butterItemsCount === 0) {
          const index = state.inBasketIds.indexOf(itemId)
          if (index > -1) {
            state.inBasketIds.splice(index, 1)
          }
        }
      }
    },
    buyMilk: (state, action) => {
      const {id: itemId, plus, clear} = action.payload
      if (plus) {
        state.milkItemsCount += 1
        state.allInbox += 1
        state.inBasketIds = [...new Set([...state.inBasketIds, itemId])]
      } else {
        if (clear) {
          state.allInbox -= state.milkItemsCount
          state.milkItemsCount = 0
        } else {
          state.allInbox -= 1
          state.milkItemsCount -= 1
        }
        //zero and not the real value because we modiefied it above
        if (state.milkItemsCount === 0) {
          const index = state.inBasketIds.indexOf(itemId)
          if (index > -1) {
            state.inBasketIds.splice(index, 1)
          }
        }
      }
    },
    buyBread: (state, action) => {
      const {id: itemId, plus, clear} = action.payload
      if (plus) {
        state.breadItemsCount += 1
        state.allInbox += 1
        state.inBasketIds = [...new Set([...state.inBasketIds, itemId])]
      } else {
        if (clear) {
          state.allInbox -= state.breadItemsCount
          state.breadItemsCount = 0
        } else {
          state.allInbox -= 1
          state.breadItemsCount -= 1
        }
        //zero and not the real value because we modiefied it above
        if (state.breadItemsCount === 0) {
          const index = state.inBasketIds.indexOf(itemId)
          if (index > -1) {
            state.inBasketIds.splice(index, 1)
          }
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {buyButter, buyMilk, buyBread} = counterSlice.actions

export default counterSlice.reducer
