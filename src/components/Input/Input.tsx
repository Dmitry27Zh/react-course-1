import { Props } from './props'

export default function ({ name, label, type = 'text', value, onChange }: Props) {
  return (
    <div className="input-group flex-column align-items-stretch">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-control w-100"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        autoComplete="off"
      />
    </div>
  )
}
