import { useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

export default function () {
  const [isActive, setIsActive] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const closeModal = () => setIsActive(false)
  useClickOutside(elementRef, () => {
    if (isActive) {
      closeModal()
    }
  })

  return (
    <>
      <div className="modal" style={{ display: isActive ? 'block' : 'none' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div ref={elementRef} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setIsActive(true)}>
        Open modal
      </button>
    </>
  )
}
