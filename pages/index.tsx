import * as React from "react"
import { NextPage } from "next"

import Layout from "../components/Layout"
import ReportForm from "../components/ReportForm"

const IndexPage: NextPage = () => {
  return (
    <Layout title="Court Report">
      <ReportForm />
    </Layout>
  )
}

export default IndexPage
