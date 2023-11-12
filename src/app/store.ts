import authSlice from './features/auth/auth.slice'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'
import companionUnitSlice from './features/companionUnit/companionUnit.slice'
import organizationalSlice from './features/organizationUnit/organizationalUnit.slice'
import planSlice from './features/plan/plan.slice'
import mixedSlice from './features/mixed/mixed.slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authSlice,
    plan: planSlice,
    mixed: mixedSlice,
    companionUnit: companionUnitSlice,
    organizational: organizationalSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
