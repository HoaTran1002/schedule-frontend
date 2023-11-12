import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Mixed } from './mixed.type'
type ErrorState = {
  type: 'GET' | 'POST' | 'DELETE' | 'PATCH'
  message: string
}
export interface MixedState {
  loading: boolean
  data?: Mixed
  error?: ErrorState
}
const initialState: MixedState = {
  loading: false
}
export const mixedSlice = createSlice({
  name: 'mixed',
  initialState,
  reducers: {
    sendRequest: (_state) => {
      _state.loading = true
    },
    getSuccess: (_state, { payload }: PayloadAction<Mixed>) => {
      _state.loading = false
      _state.data = payload
    },
    faild: (_state, { payload }: PayloadAction<ErrorState>) => {
      _state.loading = false
      _state.error = payload
    }
  }
})
export const { sendRequest, getSuccess, faild } = mixedSlice.actions

export default mixedSlice.reducer
