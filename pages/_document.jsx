import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const lang = props.__NEXT_DATA__?.locale || "fr";
  return (
    <Html lang={lang}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Inter+Tight:wght@300;400;500;600&family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,30..100;1,9..144,300..600,30..100&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
