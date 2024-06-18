import Header from "@/components/header/header"
import * as nextApp from "next/app"
import Head from "next/head"
import "../styles/tailwind.css"
import "../styles/global.css"

export default function App({Component, pageProps}: nextApp.AppProps): JSX.Element {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Placeholder</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}