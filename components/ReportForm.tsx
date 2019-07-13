import { Component } from "react"
import Form from "react-jsonschema-form"
import schema from "../schemas/report.yml"

const log = (type: any) => console.log.bind(console, type)
// const todaysDate = (new Date()).toLocaleDateString()

function todaysDate() {
  const date = new Date()
  const year = date.getFullYear()
  let day: string | number = date.getDate()
  let month: string | number = date.getMonth() + 1
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  return `${year}-${month}-${day}`
}

const today = todaysDate()
console.log(today)

const uiSchema = {}
class ReportForm extends Component {
  render() {
    const formData = {
      date: today,
    }
    return (
      <Form
        schema={schema}
        formData={formData}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    )
  }
}

export default ReportForm
