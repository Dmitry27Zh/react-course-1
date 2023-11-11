import { useRef } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { Props } from './props'

export default function ({ isActive, onClose, onOpen, onConfirm, title, body }: Props) {
  const elementRef = useRef<HTMLDivElement>(null)
  useClickOutside(elementRef, () => {
    if (isActive) {
      onClose()
    }
  })

  return (
    <>
      <div className="modal" style={{ display: isActive ? 'block' : 'none' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div ref={elementRef} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onConfirm}>
                Ok
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {onOpen && (
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
      )}
    </>
  )
}
