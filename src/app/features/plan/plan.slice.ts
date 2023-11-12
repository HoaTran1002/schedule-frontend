import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Plan } from './plan.type'

type ErrorState = {
  type: 'GET' | 'POST' | 'DELETE' | 'PATCH'
  message: string
}
export interface PlanState {
  loading: boolean
  data?: Plan[]
  error?: ErrorState
}
const initialState: PlanState = {
  loading: false
}
export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    sendRequestPlan: (_state) => {
      _state.loading = true
    },
    sendRequestPlanConvertData: (_state) => {
      _state.loading = true
    },
    getSuccess: (_state, { payload }: PayloadAction<Plan[]>) => {
      _state.loading = false
      _state.data = payload
    },
    faild: (_state, { payload }: PayloadAction<ErrorState>) => {
      _state.error = payload
      _state.loading = false
    }
  }
})
export const { sendRequestPlan, getSuccess, faild } = planSlice.actions
export default planSlice.reducer
