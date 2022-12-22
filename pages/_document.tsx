import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Åke, Imakero, is an aspiring full-stack web developer. This is his blog and portfolio website."
          key="desc"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-secondary font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
