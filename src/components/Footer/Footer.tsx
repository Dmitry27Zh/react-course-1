import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'

export default observer(Footer)

export function Footer() {
  const { settings: SettingsContext } = useStore()
  const { settings, changeTheme } = SettingsContext

  return (
    <footer className="container pt-4 pb-4">
      <div className="d-flex gap-2">
        <button
          className={`btn btn-light ${settings.theme === 'light' ? 'active' : ''}`}
          type="button"
          onClick={() => changeTheme('light')}
        >
          Switch to light
        </button>
        <button
          className={`btn btn-dark ${settings.theme === 'dark' ? 'active' : ''}`}
          type="button"
          onClick={() => changeTheme('dark')}
        >
          Switch to dark
        </button>
      </div>
    </footer>
  )
}
