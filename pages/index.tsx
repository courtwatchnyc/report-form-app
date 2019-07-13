import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Form from "react-jsonschema-form";
import schema from "../schemas/report.yml";

const log = (type: any) => console.log.bind(console, type);

const IndexPage: NextPage = () => {
  return (
    <Layout title="Record Report">
      <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    </Layout>
  )
}

export default IndexPage
