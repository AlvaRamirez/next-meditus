import React from 'react'
import GlobalStyles from '../constants/globalStyles'
import Head from 'next/head'
import Layout from '../containers/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>

          <Head>
            <title>Méditus</title>
          </Head>
          <Layout>
              <Component {...pageProps} /> 

              <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:` (function () {
              function $MPC_load() {
                window.$MPC_loaded !== true &&
                  (function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src =
                      document.location.protocol +
                      "//secure.mlstatic.com/mptools/render.js";
                    var x = document.getElementsByTagName("script")[0];
                    x.parentNode.insertBefore(s, x);
                    window.$MPC_loaded = true;
                  })();
              }
              window.$MPC_loaded !== true
                ? window.attachEvent
                  ? window.attachEvent("onload", $MPC_load)
                  : window.addEventListener("load", $MPC_load, false)
                : null;
            })();`,
          }}
        />
          </Layout>
          <GlobalStyles/>
    </>
  );
}

export default MyApp
