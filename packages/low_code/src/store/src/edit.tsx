import { createSlice } from '@reduxjs/toolkit'

export const editSlice = createSlice({
  name: 'edit',
  initialState: {
    value: null
  },
  reducers: {
    update: (state, { payload }) => {
      state.value = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { update } = editSlice.actions

export default editSlice.reducer
