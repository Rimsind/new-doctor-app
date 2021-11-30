import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta
            name="description"
            content="Premium Bootstrap 4 Landing Page Template"
          />
          <meta
            name="keywords"
            content="Appointment, Booking, System, Dashboard, Health"
          />
          <meta name="author" content="Shreethemes" />
          <meta name="email" content="shreethemes@gmail.com" />
          <meta name="website" content="http://www.shreethemes.in" />
          <meta name="Version" content="v1.0.0" />

          <link rel="shortcut icon" href="/images/favicon.ico" />

          <link
            href="/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />

          <link href="/css/simplebar.css" rel="stylesheet" type="text/css" />

          <link rel="stylesheet" href="/css/select2.min.css" />

          <link
            href="css/materialdesignicons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link href="css/remixicon.css" rel="stylesheet" type="text/css" />
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
          />

          <link rel="stylesheet" href="/css/tiny-slider.css" />

          <link href="css/style.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"
          ></script>

          <script src="/js/simplebar.min.js" />

          <script src="/js/feather.min.js" />

          <script src="/js/app-admin.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
