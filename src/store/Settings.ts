import { makeAutoObservable } from 'mobx'
import { SETTINGS } from '../data/settings'
import { Theme } from '../types'
import { Store } from '.'

export default class Settings {
  store: Store
  settings = SETTINGS

  constructor(store: Store) {
    makeAutoObservable(this)
    this.store = store
  }

  changeTheme = (newTheme: Theme) => {
    this.settings = { ...this.settings, theme: newTheme }
  }
}
