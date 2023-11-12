import { all } from 'redux-saga/effects'
import authSaga from './features/auth/auth.saga'
import companionUnitSaga from './features/companionUnit/companionUnit.saga'
import OrganizationalSaga from './features/organizationUnit/organizationalUnit.saga'
import planSaga from './features/plan/plan.saga'
import { mixedSaga } from './features/mixed/mixed.saga'

function* rootSaga() {
  yield all([authSaga(), planSaga(), mixedSaga(), companionUnitSaga(), OrganizationalSaga()])
}

export default rootSaga
