import GlobalState from "@/contexts/GlobalState"
import "@/styles/globals.css"
import axios from "axios"
axios.defaults.withCredentials = true
import HomeState from "@/contexts/HomeState"
export default function App({ Component, pageProps }) {
  return (
    <GlobalState>
      <HomeState>
        <Component {...pageProps} />
      </HomeState>
    </GlobalState>
  )
}
/*
TODO:
1)fix the globalstate script (huge error lmao)
*/
