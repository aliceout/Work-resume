import Head from "next/head";
import { ThemeProvider } from "next-themes";
import AppShell from "/components/proto/AppShell";

import "/styles/global.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <ThemeProvider attribute="class">
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ThemeProvider>
    </>
  );
};

export default App;
