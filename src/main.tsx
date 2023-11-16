import ReactDom from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreContext from './contexts/store'
import store from './store'

ReactDom.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.querySelector('.app') as HTMLElement
)
