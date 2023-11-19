import { ThemeProvider } from "next-themes";
import Container from "/components/layout/Container";
import Header from "/components/layout/Header";
import Sidebar from "/components/layout/Sidebar";
import Navbar from "/components/layout/Navbar";
import AppContext from "/utils/context";
import "/styles/globals.css";
import "/styles/custom.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <ThemeProvider attribute="class">
        <Container>
          <Header />
          <div
            id="app"
            className="flex content-start h-full w-full gap-10 mt-[200px] mb-[50px] "
          >
            <Sidebar />
            <div id="panel" className="flex flex-col xl:basis-9/12 gap-y-10">
              <Navbar />
              <main className="flex flex-col flex-1 p-12 bg-white shadow-lg rounded-xl">
                <Component {...pageProps} />
              </main>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </AppContext>
  );
}
