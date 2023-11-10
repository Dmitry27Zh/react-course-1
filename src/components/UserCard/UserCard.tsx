import useWindowSize from '../../hooks/useWindowSize'

export default function (props: { name: string; text: string }) {
  const { window, height } = useWindowSize()
  console.log(window)
  console.log(height)
  const paddingSize = Math.min(5, Math.round(window / 200))
  const className = `card p-${paddingSize}`

  return (
    <>
      <div className={className}>
        <h3>{props.name}</h3>
        <hr />
        <div>{props.text}</div>
      </div>
      <hr />
    </>
  )
}
