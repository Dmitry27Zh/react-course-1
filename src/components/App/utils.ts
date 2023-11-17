import { THEMES } from '../../data/settings'
import { Theme } from '../../types'

export const updateTheme = (theme: Theme) => {
  THEMES.forEach((theme) => document.body.classList.remove(theme))
  document.body.classList.add(theme)
}
