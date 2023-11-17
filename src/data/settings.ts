import { Settings } from '../types'

export const THEMES = ['light', 'dark'] as const

export const SETTINGS: Settings = { lang: 'ru', theme: THEMES[0] }
