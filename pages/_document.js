import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <link rel='canonical' href='https://jane.vercel.app/' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
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
