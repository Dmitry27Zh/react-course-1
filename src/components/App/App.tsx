import { observer } from 'mobx-react-lite'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import useStore from '../../hooks/useStore'
import MainRoutes from '../../routes/MainRoutes'
import { updateTheme } from './utils'

export default observer(App)

function App(): JSX.Element {
  const { settings: SettingsContext } = useStore()
  const { settings } = SettingsContext
  updateTheme(settings.theme)

  return (
    <BrowserRouter>
      <div className="d-flex flex-column container h-100">
        <Header />
        <main className="d-flex flex-column flex-grow-1">
          <hr />
          <div className="d-flex flex-grow-1 gap-5 p-4">
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
