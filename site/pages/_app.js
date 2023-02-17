import GlobalState from "@/contexts/GlobalState"
import "@/styles/globals.css"
import axios from "axios"
axios.defaults.withCredentials = true

export default function App({ Component, pageProps }) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  )
}
/*
TODO:
1)fix the globalstate script (huge error lmao)
*/
