export type Props = {
  isActive: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  body: string
  onOpen?: () => void
}
