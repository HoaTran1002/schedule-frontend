import { call, put, takeLatest } from 'redux-saga/effects'
import { Plan } from './plan.type'
import { getAllPlan } from './plan.service'
import { faild, getSuccess, sendRequestPlan } from './plan.slice'
import { ErrorAxios } from '@/config/api.config'

function* handelGetPlan() {
  try {
    const data: Plan[] = yield call(getAllPlan)
    yield put(getSuccess(data))
  } catch (error) {
    const e = error as ErrorAxios

    yield put(
      faild({
        type: 'GET',
        message: e.message
      })
    )
  }
}

export default function* planSaga() {
  yield takeLatest(sendRequestPlan.type, handelGetPlan)
}
