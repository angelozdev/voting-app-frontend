import * as React from "react";

/* Styles */
import { Global } from "@emotion/react";
import global from "styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Global styles={global} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
