import { observer } from 'mobx-react-lite'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import useStore from '../hooks/useStore'
import MainRoutes from '../routes/MainRoutes'

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
              <MainRoutes />
            </div>
          </div>
          <hr />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
