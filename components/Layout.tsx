import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        id="theme"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      />
    </Head>
    <div className="row">
      <div className="col-md-12">
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
          </nav>
        </header>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">{children}</div>
    </div>
  </div>
)

export default Layout
