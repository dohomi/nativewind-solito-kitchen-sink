import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import '../styles/global.css'
import { LmProvider } from 'app/src/provider'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/apps/next/public/favicon.ico" />
      </Head>
      <LmProvider>
        <Component {...pageProps} />
      </LmProvider>
    </>
  )
}

export default MyApp
