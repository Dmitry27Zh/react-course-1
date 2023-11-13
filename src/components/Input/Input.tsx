import { Props } from './props'

export default function ({ name, label, type = 'text', value, onChange, error, validationStatus }: Props) {
  const getInputClassName = () => {
    let result = 'form-control w-100'
    const validation = validationStatus ? `is-${validationStatus}` : ''
    result += ` ${validation}`

    return result.trim()
  }

  return (
    <div className="input-group flex-column align-items-stretch has-validation">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={getInputClassName()}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        autoComplete="off"
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  )
}
