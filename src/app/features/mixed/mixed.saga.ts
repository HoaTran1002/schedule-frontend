import { call, put, takeLatest } from 'redux-saga/effects'
import { getAllPlan } from '../plan/plan.service'
import { Plan } from '../plan/plan.type'
import { CompanionUnit } from '../companionUnit/companionUnit.type'
import { getAllCompanionUnit } from '../companionUnit/companionUnit.service'
import { OrganizaionUnit } from '../organizationUnit/organizationUnit.type'
import { getAllOrganization } from '../organizationUnit/organizationalUnit.service'
import { faild, getSuccess, sendRequest } from './mixed.slice'
import { Mixed } from './mixed.type'
import { ErrorAxios } from '@/config/api.config'

function* handelGetAll() {
  try {
    const plan: Plan[] = yield call(getAllPlan)
    const companionUnit: CompanionUnit[] = yield call(getAllCompanionUnit)
    const organizational: OrganizaionUnit[] = yield call(getAllOrganization)
    const data: Mixed = {
      dataPlan: plan,
      dataCompainonUnit: companionUnit,
      dataOrganizationalUint: organizational
    }
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

export function* mixedSaga() {
  yield takeLatest(sendRequest.type, handelGetAll)
}
