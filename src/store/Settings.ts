import { makeAutoObservable } from 'mobx'
import { SETTINGS } from '../data/settings'
import { Theme } from '../types'

export default class Settings {
  settings = SETTINGS

  constructor() {
    makeAutoObservable(this)
  }

  changeTheme = (newTheme: Theme) => {
    this.settings = { ...this.settings, theme: newTheme }
  }
}
