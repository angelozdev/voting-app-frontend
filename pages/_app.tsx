import 'normalize.css'
import * as React from 'react'

/* Next */
import Head from 'next/head'

/* Graphql */
import { ApolloProvider } from '@apollo/client'
import client from 'graphql/client'

/* Styles */
import { Global } from '@emotion/react'
import global from 'styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={global} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
