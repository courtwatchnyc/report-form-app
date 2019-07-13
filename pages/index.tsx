import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type: any) => console.log.bind(console, type);

const IndexPage: NextPage = () => {
  return (
    <Layout stattitle="Record Report">
      <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    </Layout>
  )
}

export default IndexPage
