import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "/ni18n.config";
import AppContext from "/utils/context";
import Container from "/components/layout/Container";
import Header from "/components/layout/Header";
import Sidebar from "/components/layout/Sidebar";
import Navbar from "/components/layout/Navbar";

import "/styles/global.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Resume | aliceout" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content=" cv, portfolio, react nextjs portfolio, resume"
        />
        <meta name="ibthemes" content="ATFN" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Resume | Alice Aussel-Delamaide</title>
      </Head>
      <AppContext>
        <ThemeProvider attribute="class">
          <Container>
            <Header />
            <div
              id="app"
              className="flex flex-col lg:flex-row content-start min-h-max w-full gap-10 gap-y-6 mt-10 md:mt-[180px] justify-center m-auto"
            >
              <Sidebar />
              <div
                id="panel"
                className="flex flex-col lg:basis-9/12 gap-y-10 md:gap-y-6"
              >
                <Navbar />
                <main className="flex flex-col px-2 m-auto duration-300 shadow-lg lg:m-auto md:mx-10 md:px-9 pb-9 bg-white/90 dark:bg-black/90 dark:text-gray-300 rounded-xl flex-0">
                  <Component {...pageProps} />
                </main>
                <div className="flex flex-1 h-20 min-h-20"></div>
              </div>
            </div>
          </Container>
        </ThemeProvider>
      </AppContext>
    </>
  );
};

export default appWithI18Next(App, ni18nConfig);
