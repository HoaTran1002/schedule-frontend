import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { adminPages, clientPages } from './pages'
import Login from './pages/auth/login'
import PrivateRouter from './components/privateRouter'

const App = () => {
  // return (
  //   <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
  //     Save changes
  //   </button>
  // )
  return (
    <BrowserRouter>
      <Routes>
        {/* =================page auth========================== */}
        <Route path='/auth/login' element={<Login />} />

        {/* =================page client========================== */}
        {clientPages.map((page) => (
          <Route key={page.path} path={page.path} element={<page.element />} />
        ))}

        {/* =================page admin========================== */}
        {adminPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <PrivateRouter>
                <page.element />
              </PrivateRouter>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
