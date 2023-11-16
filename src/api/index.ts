export default {
  send: (data: object) => {
    const jsonData = JSON.stringify(data)
    alert(jsonData)
  },
}
