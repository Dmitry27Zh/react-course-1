export default function (props: { name: string; text: string }) {
  return (
    <>
      <div className="card">
        <h3>{props.name}</h3>
        <hr />
        <div>{props.text}</div>
      </div>
      <hr />
    </>
  )
}
