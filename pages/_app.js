import Layout1 from "../components/Layout/Layout1";

// import "../public/css/simplebar.css";
// import "../public/css/bootstrap.min.css";
// import "../public/css/select2.min.css";
// import "../public/css/materialdesignicons.min.css";
// import "../public/css/tiny-slider.css";
// import "../public/css/remixicon.css";
// import "../public/css/tiny-slider.css";
// import "../public/css/style.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <Layout1>{page}</Layout1>);

  return getLayout(<Component {...pageProps} />);
}
