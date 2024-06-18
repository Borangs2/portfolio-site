import * as nextApp from "next/app"

export default function App({Component, pageProps}: nextApp.AppProps): JSX.Element {
  return (
    <div>
      <Component>{...pageProps}</Component>
    </div>
  )
}