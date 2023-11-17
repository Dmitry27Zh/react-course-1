import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Result from '../pages/Result'
import { observer } from 'mobx-react-lite'
import Footer from './Footer'
import Header from './Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import useStore from '../hooks/useStore'

export default observer(App)

function App(): JSX.Element {
  const { settings: SettingsContext } = useStore()
  const { settings } = SettingsContext

  return (
    <BrowserRouter>
      <div className="container" style={{ background: settings.theme === 'dark' ? '#ececec' : '' }}>
        <Header />
        <main>
          <hr />
          <div className="d-flex gap-5 p-4">
            <aside>Aside</aside>
            <div className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/result" element={<Result />} />
              </Routes>
            </div>
          </div>
          <hr />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
