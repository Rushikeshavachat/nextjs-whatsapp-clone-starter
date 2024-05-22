import { StateProvider } from "@/context/StateContext";
import  reducer ,{ initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(

<StateProvider initialState={initialState} reducer={reducer} >
<Head>
  <title>Whatspp</title>
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>
<Component {...pageProps} />
</StateProvider>
  ) 
 
}
