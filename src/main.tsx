import ReactDom from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import SettingsContext from './contexts/settings'
import settings from './store/Settings'

ReactDom.render(
  <SettingsContext.Provider value={settings}>
    <App />
  </SettingsContext.Provider>,
  document.querySelector('.app') as HTMLElement
)
