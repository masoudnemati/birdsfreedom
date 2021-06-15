import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa">
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          {/* <link
            href="http://www.fontonline.ir/css/IranNastaliq.css"
            rel="stylesheet"
            type="text/css"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
